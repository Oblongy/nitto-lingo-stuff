Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-HexString {
  param(
    [byte[]] $Bytes
  )

  if (-not $Bytes -or $Bytes.Length -eq 0) {
    return ""
  }

  return (($Bytes | ForEach-Object { "{0:X2}" -f $_ }) -join " ")
}

function Get-ByteSlice {
  param(
    [byte[]] $Bytes,
    [int] $Start,
    [int] $Length
  )

  if ($Length -le 0) {
    return [byte[]]@()
  }

  return [byte[]]$Bytes[$Start..($Start + $Length - 1)]
}

function Add-Region {
  param(
    [System.Collections.Generic.List[object]] $Regions,
    [string] $Kind,
    [string] $Class,
    [int] $BlockOffset,
    [int] $FileOffset,
    [int] $RelStart,
    [int] $RelEnd,
    [byte[]] $Bytes,
    [string] $Note
  )

  $Regions.Add([pscustomobject]@{
      kind               = $Kind
      regionClass        = $Class
      blockRelativeStart = $RelStart
      blockRelativeEnd   = $RelEnd
      fileStart          = $FileOffset + $RelStart
      fileEnd            = $FileOffset + $RelEnd
      lengthBytes        = $RelEnd - $RelStart + 1
      hex                = Get-HexString $Bytes
      note               = $Note
    })
}

function Parse-BlockDoc {
  param(
    [string] $DocPath
  )

  $text = Get-Content -LiteralPath $DocPath -Raw

  $blockOffset = [int]([regex]::Match($text, 'JSON block offset `(\d+)`').Groups[1].Value)
  $blockLength = [int]([regex]::Match($text, 'JSON block offset `\d+`, length `(\d+)`').Groups[1].Value)
  $fileOffset = [int]([regex]::Match($text, 'File offset `(\d+)`').Groups[1].Value)
  $preMarkerLength = [int]([regex]::Match($text, 'Pre-marker prefix length `(\d+)`').Groups[1].Value)

  $markerMatch = [regex]::Match(
    $text,
    'Marker bytes:\s+```text\s+([0-9A-Fa-f\s]+?)\s+```',
    [System.Text.RegularExpressions.RegexOptions]::Singleline
  )
  if (-not $markerMatch.Success) {
    throw "Could not parse marker bytes from $DocPath"
  }

  $markerBytes = [byte[]]@(
    ($markerMatch.Groups[1].Value -split '\s+' | Where-Object { $_ -match '^[0-9A-Fa-f]{2}$' } | ForEach-Object { [Convert]::ToByte($_, 16) })
  )

  return [pscustomobject]@{
    docPath          = $DocPath
    blockOffset      = $blockOffset
    blockLength      = $blockLength
    fileOffset       = $fileOffset
    preMarkerLength  = $preMarkerLength
    markerBytes      = $markerBytes
    markerLength     = $markerBytes.Length
    codeLength       = [int][BitConverter]::ToUInt32($markerBytes, 4)
  }
}

function Parse-NameRecords {
  param(
    [byte[]] $BlockBytes,
    [int] $BlockOffset,
    [int] $FileOffset,
    [int] $CountOffset,
    [uint32] $Count,
    [System.Collections.Generic.List[object]] $Regions
  )

  $records = New-Object System.Collections.Generic.List[object]
  $cursor = $CountOffset + 4
  $stopReason = $null
  $opaqueRecord = $null

  for ($i = 0; $i -lt [int]$Count; $i++) {
    $id = [uint32][BitConverter]::ToUInt32($BlockBytes, $cursor)
    $kind = [uint32][BitConverter]::ToUInt32($BlockBytes, $cursor + 4)
    $len = [uint32][BitConverter]::ToUInt32($BlockBytes, $cursor + 8)

    $headerBytes = Get-ByteSlice -Bytes $BlockBytes -Start $cursor -Length 12
    $headerNote = "record=$i id=$id (0x{0:X8}) kind=$kind (0x{1:X8}) len=$len (0x{2:X8})" -f $id, $kind, $len
    Add-Region -Regions $Regions -Kind "name_record_header" -Class "payload-name-record" -BlockOffset $BlockOffset -FileOffset $FileOffset -RelStart $cursor -RelEnd ($cursor + 11) -Bytes $headerBytes -Note $headerNote

    $textStart = $cursor + 12
    if ($kind -eq 4) {
      $textByteLen = [int]$len * 2
      $textBytes = Get-ByteSlice -Bytes $BlockBytes -Start $textStart -Length $textByteLen
      $text = [System.Text.Encoding]::Unicode.GetString($textBytes)
      Add-Region -Regions $Regions -Kind "name_record_text_utf16le" -Class "payload-name-record" -BlockOffset $BlockOffset -FileOffset $FileOffset -RelStart $textStart -RelEnd ($textStart + $textByteLen - 1) -Bytes $textBytes -Note "record=$i text=$text"

      $textEndExclusive = $textStart + $textByteLen
      $nextCursor = [int]([Math]::Ceiling($textEndExclusive / 4.0) * 4)
      if ($nextCursor -gt $textEndExclusive) {
        $padLen = $nextCursor - $textEndExclusive
        $padBytes = Get-ByteSlice -Bytes $BlockBytes -Start $textEndExclusive -Length $padLen
        Add-Region -Regions $Regions -Kind "name_record_post_text_pad" -Class "payload-name-record" -BlockOffset $BlockOffset -FileOffset $FileOffset -RelStart $textEndExclusive -RelEnd ($nextCursor - 1) -Bytes $padBytes -Note "record=$i 4-byte alignment pad after UTF-16LE text"
      }

      $records.Add([pscustomobject]@{
          index          = $i
          id             = $id
          kind           = $kind
          length         = $len
          text           = $text
          headerStart    = $cursor
          headerEnd      = $cursor + 11
          textStart      = $textStart
          textEnd        = $textEndExclusive - 1
          nextOffset     = $nextCursor
        })
      $cursor = $nextCursor
    }
    else {
      $stopReason = "opaque_record_kind"
      $opaqueRecord = [pscustomobject]@{
        index       = $i
        id          = $id
        kind        = $kind
        length      = $len
        headerStart = $cursor
        headerEnd   = $cursor + 11
      }
      $cursor = $cursor + 12
      break
    }
  }

  return [pscustomobject]@{
    records       = $records
    nextOffset    = $cursor
    stopReason    = $stopReason
    opaqueRecord  = $opaqueRecord
  }
}

function Find-TailAsciiRecord {
  param(
    [byte[]] $BlockBytes,
    [int] $TailStart,
    [int] $TailEnd,
    [byte[]] $NextPreMarkerBytes
  )

  for ($candidate = $TailStart; $candidate -le ($TailEnd - 12); $candidate++) {
    if (($candidate % 4) -ne 0) {
      continue
    }

    $field0 = [int][BitConverter]::ToUInt32($BlockBytes, $candidate)
    $field1 = [int][BitConverter]::ToUInt32($BlockBytes, $candidate + 4)
    $asciiLen = [int][BitConverter]::ToUInt32($BlockBytes, $candidate + 8)

    if ($asciiLen -le 0 -or $asciiLen -gt 64) {
      continue
    }

    $asciiStart = $candidate + 12
    if ($asciiStart -gt $TailEnd) {
      continue
    }

    $inBlockTextLen = $TailEnd - $asciiStart + 1
    $inBlockTextBytes = Get-ByteSlice -Bytes $BlockBytes -Start $asciiStart -Length $inBlockTextLen
    $combinedBytes = [byte[]]@($inBlockTextBytes + $NextPreMarkerBytes)

    $needed = $asciiLen + 1
    if ($combinedBytes.Length -lt $needed) {
      continue
    }

    $candidateBytes = [byte[]]$combinedBytes[0..($needed - 1)]
    $textBytes = [byte[]]$candidateBytes[0..($asciiLen - 1)]
    $terminator = $candidateBytes[$asciiLen]

    $allPrintable = $true
    foreach ($b in $textBytes) {
      if ($b -lt 0x20 -or $b -gt 0x7E) {
        $allPrintable = $false
        break
      }
    }

    if (-not $allPrintable -or $terminator -ne 0) {
      continue
    }

    return [pscustomobject]@{
      recordStart        = $candidate
      field0             = $field0
      field1             = $field1
      asciiLen           = $asciiLen
      asciiStart         = $asciiStart
      inBlockTextLen     = $inBlockTextLen
      inBlockText        = [System.Text.Encoding]::ASCII.GetString($inBlockTextBytes)
      inBlockBytesHex    = Get-HexString $inBlockTextBytes
      spillBytesNeeded   = $needed - $inBlockTextLen
      spillBytesHex      = Get-HexString ([byte[]]$NextPreMarkerBytes[0..(($needed - $inBlockTextLen) - 1)])
      combinedText       = [System.Text.Encoding]::ASCII.GetString($textBytes)
      combinedBytesHex   = Get-HexString $candidateBytes
      headerBytesHex     = Get-HexString (Get-ByteSlice -Bytes $BlockBytes -Start $candidate -Length 12)
    }
  }

  return $null
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$binPath = Join-Path $root 'Lscr-104.bin'
$binBytes = [System.IO.File]::ReadAllBytes($binPath)

$blockDocs = @(
  (Join-Path $root 'Lscr-104.pass-block25976-table.md'),
  (Join-Path $root 'Lscr-104.pass-block26196-table.md')
)

$blocks = New-Object System.Collections.Generic.List[object]
$parsedByOffset = @{}

foreach ($docPath in $blockDocs) {
  $blockMeta = Parse-BlockDoc -DocPath $docPath
  $blockBytes = Get-ByteSlice -Bytes $binBytes -Start $blockMeta.fileOffset -Length $blockMeta.blockLength

  $regions = New-Object System.Collections.Generic.List[object]

  Add-Region -Regions $regions -Kind "pre_marker" -Class "payload-spill-or-prefix" -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -RelStart 0 -RelEnd ($blockMeta.preMarkerLength - 1) -Bytes (Get-ByteSlice -Bytes $blockBytes -Start 0 -Length $blockMeta.preMarkerLength) -Note "raw block pre-marker bytes"
  Add-Region -Regions $regions -Kind "marker" -Class "block-metadata" -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -RelStart $blockMeta.preMarkerLength -RelEnd ($blockMeta.preMarkerLength + $blockMeta.markerLength - 1) -Bytes $blockMeta.markerBytes -Note "raw block marker bytes"

  $codeStart = $blockMeta.preMarkerLength + $blockMeta.markerLength
  $codeEnd = $codeStart + $blockMeta.codeLength - 1
  Add-Region -Regions $regions -Kind "code_window" -Class "executable" -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -RelStart $codeStart -RelEnd $codeEnd -Bytes (Get-ByteSlice -Bytes $blockBytes -Start $codeStart -Length $blockMeta.codeLength) -Note "compiled code bytes from block marker length field"

  $payloadAlignedStart = [int]([Math]::Ceiling(($codeEnd + 1) / 4.0) * 4)
  if ($payloadAlignedStart -gt ($codeEnd + 1)) {
    $padLen = $payloadAlignedStart - ($codeEnd + 1)
    Add-Region -Regions $regions -Kind "post_code_alignment" -Class "payload-alignment" -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -RelStart ($codeEnd + 1) -RelEnd ($payloadAlignedStart - 1) -Bytes (Get-ByteSlice -Bytes $blockBytes -Start ($codeEnd + 1) -Length $padLen) -Note "alignment bytes before payload count"
  }

  $payloadCount = [int][BitConverter]::ToUInt32($blockBytes, $payloadAlignedStart)
  Add-Region -Regions $regions -Kind "payload_name_count" -Class "payload-count" -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -RelStart $payloadAlignedStart -RelEnd ($payloadAlignedStart + 3) -Bytes (Get-ByteSlice -Bytes $blockBytes -Start $payloadAlignedStart -Length 4) -Note "count=$payloadCount"

  $recordParse = Parse-NameRecords -BlockBytes $blockBytes -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -CountOffset $payloadAlignedStart -Count $payloadCount -Regions $regions
  $tailStart = $recordParse.nextOffset
  $tailEnd = $blockMeta.blockLength - 1

  if ($tailStart -le $tailEnd) {
    $tailNote = "remaining non-code bytes after parsed UTF-16LE name records"
    if ($recordParse.stopReason -and $recordParse.opaqueRecord) {
      $tailNote = "remaining non-code bytes after parsed UTF-16LE name records; parsing stopped at opaque record index {0} kind 0x{1:X8} len 0x{2:X8}" -f $recordParse.opaqueRecord.index, $recordParse.opaqueRecord.kind, $recordParse.opaqueRecord.length
    }
    Add-Region -Regions $regions -Kind "tail_after_name_records" -Class "payload-tail" -BlockOffset $blockMeta.blockOffset -FileOffset $blockMeta.fileOffset -RelStart $tailStart -RelEnd $tailEnd -Bytes (Get-ByteSlice -Bytes $blockBytes -Start $tailStart -Length ($tailEnd - $tailStart + 1)) -Note $tailNote
  }

  $parsed = [pscustomobject]@{
    blockOffset         = $blockMeta.blockOffset
    blockLength         = $blockMeta.blockLength
    fileOffset          = $blockMeta.fileOffset
    preMarkerLength     = $blockMeta.preMarkerLength
    markerLength        = $blockMeta.markerLength
    codeLength          = $blockMeta.codeLength
    codeStart           = $codeStart
    codeEnd             = $codeEnd
    payloadAlignedStart = $payloadAlignedStart
    payloadCount        = $payloadCount
    payloadRecordsParsed = $recordParse.records.Count
    parseStopReason     = $recordParse.stopReason
    opaqueRecord        = $recordParse.opaqueRecord
    nameRecords         = $recordParse.records
    tailStart           = $tailStart
    tailEnd             = $tailEnd
    regions             = $regions
  }

  $blocks.Add($parsed)
  $parsedByOffset[$blockMeta.blockOffset] = $parsed
}

$crossBlockLinks = New-Object System.Collections.Generic.List[object]

$block25976 = $parsedByOffset[25976]
$block26196 = $parsedByOffset[26196]
$nextPreBytes = Get-ByteSlice -Bytes $binBytes -Start $block26196.fileOffset -Length $block26196.preMarkerLength
$tailCandidate = Find-TailAsciiRecord -BlockBytes (Get-ByteSlice -Bytes $binBytes -Start $block25976.fileOffset -Length $block25976.blockLength) -TailStart $block25976.tailStart -TailEnd $block25976.tailEnd -NextPreMarkerBytes $nextPreBytes

if ($tailCandidate) {
  $crossBlockLinks.Add([pscustomobject]@{
      fromBlock              = 25976
      toBlock                = 26196
      type                   = "cross_block_ascii_tail_spill"
      recordStart            = $tailCandidate.recordStart
      headerBytesHex         = $tailCandidate.headerBytesHex
      field0                 = $tailCandidate.field0
      field1                 = $tailCandidate.field1
      asciiLen               = $tailCandidate.asciiLen
      inBlockAsciiStart      = $tailCandidate.asciiStart
      inBlockAsciiEnd        = $tailCandidate.asciiStart + $tailCandidate.inBlockTextLen - 1
      inBlockAsciiFileStart  = $block25976.fileOffset + $tailCandidate.asciiStart
      inBlockAsciiFileEnd    = $block25976.fileOffset + $tailCandidate.asciiStart + $tailCandidate.inBlockTextLen - 1
      inBlockAsciiText       = $tailCandidate.inBlockText
      inBlockAsciiHex        = $tailCandidate.inBlockBytesHex
      spillBytesNeeded       = $tailCandidate.spillBytesNeeded
      spillFileStart         = $block26196.fileOffset
      spillFileEnd           = $block26196.fileOffset + $tailCandidate.spillBytesNeeded - 1
      spillIntoNextPreMarker = $tailCandidate.spillBytesHex
      completedAsciiText     = $tailCandidate.combinedText
      completedAsciiHex      = $tailCandidate.combinedBytesHex
      nextFreshMarkerStart   = $block26196.fileOffset + $block26196.preMarkerLength
      note                   = "The current block length leaves only part of the ASCII tail in-block; the next block pre-marker completes the bytes exactly."
    })
}

$artifact = [pscustomobject]@{
  artifactName = "Lscr-104.late-helper-region-map"
  generatedBy  = [System.IO.Path]::GetFileName($MyInvocation.MyCommand.Path)
  generatedAt  = (Get-Date).ToString("s")
  binPath      = $binPath
  blockCount   = $blocks.Count
  blocks       = $blocks
  crossBlockLinks = $crossBlockLinks
}

$jsonPath = Join-Path $root 'Lscr-104.late-helper-region-map.json'
$artifact | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $jsonPath

$md = New-Object System.Text.StringBuilder
[void]$md.AppendLine("# Lscr-104 Late-Helper Region Map")
[void]$md.AppendLine()
[void]$md.AppendLine(("Generated by {0} from Lscr-104.bin plus the local pass-block25976 / pass-block26196 docs." -f (Split-Path -Leaf $MyInvocation.MyCommand.Path)))
[void]$md.AppendLine()

foreach ($block in $blocks) {
  [void]$md.AppendLine("## Block $($block.blockOffset)")
  [void]$md.AppendLine()
  [void]$md.AppendLine(("- fileOffset: {0}" -f $block.fileOffset))
  [void]$md.AppendLine(("- blockLength: {0}" -f $block.blockLength))
  [void]$md.AppendLine(("- codeWindow: 0x{0:X4}..0x{1:X4}" -f $block.codeStart, $block.codeEnd))
  [void]$md.AppendLine(("- payloadAlignedStart: 0x{0:X4}" -f $block.payloadAlignedStart))
  [void]$md.AppendLine(("- payloadCount: {0}" -f $block.payloadCount))
  [void]$md.AppendLine(("- payloadRecordsParsed: {0}" -f $block.payloadRecordsParsed))
  if ($block.parseStopReason -and $block.opaqueRecord) {
    [void]$md.AppendLine(("- parseStopReason: {0} at record {1} kind 0x{2:X8} len 0x{3:X8}" -f $block.parseStopReason, $block.opaqueRecord.index, $block.opaqueRecord.kind, $block.opaqueRecord.length))
  }
  [void]$md.AppendLine()
  [void]$md.AppendLine("| kind | class | rel start | rel end | file start | file end | note |")
  [void]$md.AppendLine("| --- | --- | --- | --- | --- | --- | --- |")
  foreach ($region in $block.regions) {
    [void]$md.AppendLine(("| {0} | {1} | 0x{2:X4} | 0x{3:X4} | {4} | {5} | {6} |" -f $region.kind, $region.regionClass, $region.blockRelativeStart, $region.blockRelativeEnd, $region.fileStart, $region.fileEnd, $region.note))
  }
  [void]$md.AppendLine()
}

if ($crossBlockLinks.Count -gt 0) {
  [void]$md.AppendLine("## Cross-Block Links")
  [void]$md.AppendLine()
  foreach ($link in $crossBlockLinks) {
    [void]$md.AppendLine(("- {0} -> {1} {2}" -f $link.fromBlock, $link.toBlock, $link.type))
    [void]$md.AppendLine(("  - recordStart: 0x{0:X4}" -f $link.recordStart))
    [void]$md.AppendLine(("  - header: {0}" -f $link.headerBytesHex))
    [void]$md.AppendLine(("  - in-block ascii: {0} ({1}) file {2}..{3}" -f $link.inBlockAsciiText, $link.inBlockAsciiHex, $link.inBlockAsciiFileStart, $link.inBlockAsciiFileEnd))
    [void]$md.AppendLine(("  - spill into next pre-marker: {0} file {1}..{2}" -f $link.spillIntoNextPreMarker, $link.spillFileStart, $link.spillFileEnd))
    [void]$md.AppendLine(("  - next fresh marker starts at file {0}" -f $link.nextFreshMarkerStart))
    [void]$md.AppendLine(("  - completed ascii: {0} ({1})" -f $link.completedAsciiText, $link.completedAsciiHex))
    [void]$md.AppendLine()
  }
}

$mdPath = Join-Path $root 'Lscr-104.late-helper-region-map.md'
$md.ToString() | Set-Content -LiteralPath $mdPath

Write-Output "Wrote $jsonPath"
Write-Output "Wrote $mdPath"
