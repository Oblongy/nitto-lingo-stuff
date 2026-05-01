param(
  [string]$WorkspaceRoot = (Get-Location).Path,
  [string]$OutputDirName = "clean"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function New-Dir {
  param([string]$Path)
  New-Item -ItemType Directory -Force -Path $Path | Out-Null
}

function Copy-FileIfPresent {
  param(
    [string]$SourcePath,
    [string]$DestinationPath
  )
  if (-not (Test-Path -LiteralPath $SourcePath -PathType Leaf)) {
    return $false
  }
  New-Dir -Path (Split-Path -Parent $DestinationPath)
  Copy-Item -LiteralPath $SourcePath -Destination $DestinationPath -Force
  return $true
}

function Copy-DirIfPresent {
  param(
    [string]$SourcePath,
    [string]$DestinationPath
  )
  if (-not (Test-Path -LiteralPath $SourcePath -PathType Container)) {
    return $false
  }
  New-Dir -Path (Split-Path -Parent $DestinationPath)
  Copy-Item -LiteralPath $SourcePath -Destination $DestinationPath -Recurse -Force
  return $true
}

function Get-RelativePath {
  param(
    [string]$BasePath,
    [string]$TargetPath
  )
  $baseUri = New-Object System.Uri(($BasePath.TrimEnd('\') + '\'))
  $targetUri = New-Object System.Uri($TargetPath)
  return [System.Uri]::UnescapeDataString($baseUri.MakeRelativeUri($targetUri).ToString()).Replace('/', '\')
}

function Get-FirstExistingPath {
  param([string[]]$Paths)
  foreach ($path in $Paths) {
    if (Test-Path -LiteralPath $path) {
      return $path
    }
  }
  return $null
}

$workspaceRoot = (Resolve-Path -LiteralPath $WorkspaceRoot).Path
$outputRoot = Join-Path $workspaceRoot $OutputDirName

if (Test-Path -LiteralPath $outputRoot) {
  $resolvedOutput = (Resolve-Path -LiteralPath $outputRoot).Path
  if (-not $resolvedOutput.StartsWith($workspaceRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to remove output path outside workspace: $resolvedOutput"
  }
  Remove-Item -LiteralPath $resolvedOutput -Recurse -Force
}

New-Dir -Path $outputRoot

$scriptConfigs = @(
  [ordered]@{
    Id = "Lscr-93"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\01-frame1script.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-101"
    PreferredRoots = @("reconstructed")
    JsRewrite = $null
    ExtraRootFiles = @("Lnam-100.bin", "Lnam-100.json")
    ExtraEvidenceDirs = @("tmp\\lscr101-work")
  },
  [ordered]@{
    Id = "Lscr-102"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\02-race-engine.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-103"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\03-race-engine-from-c.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-104"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\12-socket-client-to-server.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-105"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\13-socket-server-to-client.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-106"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\14-file-handler.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-107"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\15-initialization-script.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-108"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\17-lingo-xtra.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  },
  [ordered]@{
    Id = "Lscr-109"
    PreferredRoots = @("reconstructed (1)", "reconstructed")
    JsRewrite = "js_rewrite\\10-connection-script.js"
    ExtraRootFiles = @()
    ExtraEvidenceDirs = @()
  }
)

$promotedCandidates = @(
  "rightful.ls",
  "rightful.js",
  "rightful.full-mechanical.js",
  "rightful.from-lingo.js"
)

$summaryRows = New-Object System.Collections.Generic.List[object]

foreach ($config in $scriptConfigs) {
  $id = $config.Id
  $targetDir = Join-Path $outputRoot $id
  $rootArtifactsDir = Join-Path $targetDir "root-artifacts"
  $evidenceDir = Join-Path $targetDir "evidence"
  $siblingArtifactsDir = Join-Path $targetDir "sibling-artifacts"

  New-Dir -Path $targetDir
  New-Dir -Path $rootArtifactsDir
  New-Dir -Path $evidenceDir
  New-Dir -Path $siblingArtifactsDir

  $rootArtifacts = @(Get-ChildItem -LiteralPath $workspaceRoot -File | Where-Object { $_.Name -like "$id.*" })
  foreach ($file in $rootArtifacts) {
    Copy-Item -LiteralPath $file.FullName -Destination (Join-Path $rootArtifactsDir $file.Name) -Force
  }

  foreach ($extraRootFile in $config.ExtraRootFiles) {
    $extraRootPath = Join-Path $workspaceRoot $extraRootFile
    if (Test-Path -LiteralPath $extraRootPath -PathType Leaf) {
      New-Dir -Path (Join-Path $evidenceDir "root-shared")
      Copy-Item -LiteralPath $extraRootPath -Destination (Join-Path (Join-Path $evidenceDir "root-shared") (Split-Path -Leaf $extraRootPath)) -Force
    }
  }

  foreach ($extraEvidenceDir in $config.ExtraEvidenceDirs) {
    $sourceExtraDir = Join-Path $workspaceRoot $extraEvidenceDir
    if (Test-Path -LiteralPath $sourceExtraDir -PathType Container) {
      Copy-DirIfPresent -SourcePath $sourceExtraDir -DestinationPath (Join-Path $evidenceDir (Split-Path -Leaf $sourceExtraDir)) | Out-Null
    }
  }

  $copiedEvidenceRoots = New-Object System.Collections.Generic.List[string]
  foreach ($rootName in @("reconstructed", "reconstructed (1)")) {
    $sourceDir = Join-Path $workspaceRoot (Join-Path $rootName $id)
    if (Test-Path -LiteralPath $sourceDir -PathType Container) {
      $destDir = Join-Path $evidenceDir $rootName
      Copy-DirIfPresent -SourcePath $sourceDir -DestinationPath $destDir | Out-Null
      $copiedEvidenceRoots.Add($rootName) | Out-Null
    }
  }

  $preferredBaseDir = $null
  foreach ($preferredRoot in $config.PreferredRoots) {
    $candidate = Join-Path $workspaceRoot (Join-Path $preferredRoot $id)
    if (Test-Path -LiteralPath $candidate -PathType Container) {
      $preferredBaseDir = $candidate
      break
    }
  }

  $mechanicalReportCandidates = @()
  if ($preferredBaseDir) {
    $mechanicalReportCandidates += (Join-Path $preferredBaseDir "$id.mechanical-report.md")
  }
  foreach ($rootName in @("reconstructed", "reconstructed (1)")) {
    $mechanicalReportCandidates += (Join-Path $workspaceRoot (Join-Path (Join-Path $rootName $id) "$id.mechanical-report.md"))
  }
  $reportPath = Get-FirstExistingPath -Paths $mechanicalReportCandidates
  if ($reportPath) {
    Copy-FileIfPresent -SourcePath $reportPath -DestinationPath (Join-Path $targetDir "$id.mechanical-report.md") | Out-Null
  }

  $promotedFiles = New-Object System.Collections.Generic.List[string]
  foreach ($candidateName in $promotedCandidates) {
    $candidatePaths = @()
    if ($preferredBaseDir) {
      $candidatePaths += (Join-Path $preferredBaseDir $candidateName)
    }
    foreach ($rootName in @("reconstructed", "reconstructed (1)")) {
      $candidatePaths += (Join-Path $workspaceRoot (Join-Path (Join-Path $rootName $id) $candidateName))
    }
    $sourcePath = Get-FirstExistingPath -Paths $candidatePaths
    if ($sourcePath) {
      $destPath = Join-Path $targetDir $candidateName
      Copy-FileIfPresent -SourcePath $sourcePath -DestinationPath $destPath | Out-Null
      $promotedFiles.Add((Split-Path -Leaf $destPath)) | Out-Null
    }
  }

  if ($config.JsRewrite) {
    $jsRewriteSource = Join-Path $workspaceRoot $config.JsRewrite
    if (Test-Path -LiteralPath $jsRewriteSource -PathType Leaf) {
      Copy-FileIfPresent -SourcePath $jsRewriteSource -DestinationPath (Join-Path $siblingArtifactsDir (Split-Path -Leaf $jsRewriteSource)) | Out-Null
    }
  }

  $summaryRows.Add([pscustomobject]@{
      Id = $id
      PreferredSource = if ($preferredBaseDir) { Get-RelativePath -BasePath $workspaceRoot -TargetPath $preferredBaseDir } else { "none" }
      RootArtifactCount = $rootArtifacts.Count
      EvidenceRoots = if ($copiedEvidenceRoots.Count -gt 0) { ($copiedEvidenceRoots -join ", ") } else { "none" }
      PromotedFiles = if ($promotedFiles.Count -gt 0) { ($promotedFiles -join ", ") } else { "none" }
      HasSiblingJsRewrite = if ($config.JsRewrite) { (Test-Path -LiteralPath (Join-Path $workspaceRoot $config.JsRewrite)) } else { $false }
    }) | Out-Null
}

$summaryLines = New-Object System.Collections.Generic.List[string]
$summaryLines.Add('# LSCR Clean Consolidation') | Out-Null
$summaryLines.Add('') | Out-Null
$summaryLines.Add('This tree groups the scattered `Lscr-*` artifacts by script without modifying the original workspace layout.') | Out-Null
$summaryLines.Add('') | Out-Null
$summaryLines.Add('Folder layout inside each `Lscr-*` directory:') | Out-Null
$summaryLines.Add('- top-level promoted files: key `rightful.*` artifacts plus the script mechanical report when present') | Out-Null
$summaryLines.Add('- `root-artifacts\`: files that originally lived at workspace root and matched that script id') | Out-Null
$summaryLines.Add('- `evidence\`: copied `reconstructed`, `reconstructed (1)`, and any script-specific extra evidence trees') | Out-Null
$summaryLines.Add('- `sibling-artifacts\`: script-adjacent `js_rewrite` mirrors when present') | Out-Null
$summaryLines.Add('') | Out-Null
$summaryLines.Add('## Summary') | Out-Null
$summaryLines.Add('') | Out-Null
$summaryLines.Add('| Script | Preferred promoted source | Root artifacts copied | Evidence roots copied | Promoted files | JS rewrite copied |') | Out-Null
$summaryLines.Add('| --- | --- | ---: | --- | --- | --- |') | Out-Null
foreach ($row in $summaryRows) {
  $summaryLines.Add('| ' + $row.Id + ' | `' + $row.PreferredSource + '` | ' + $row.RootArtifactCount + ' | ' + $row.EvidenceRoots + ' | ' + $row.PromotedFiles + ' | ' + $row.HasSiblingJsRewrite + ' |') | Out-Null
}
$summaryLines.Add('') | Out-Null
$summaryLines.Add('## Notes') | Out-Null
$summaryLines.Add('- `Lscr-101` promotes the recovered `reconstructed\Lscr-101\rightful.ls` because `reconstructed (1)\Lscr-101` does not contain a matching `rightful.ls`.') | Out-Null
$summaryLines.Add('- `Lscr-102` through `Lscr-109` and `Lscr-93` prefer the `reconstructed (1)` tree for promoted `rightful.ls` when that tree exists, while still preserving the alternate reconstruction tree under `evidence\`.') | Out-Null
$summaryLines.Add('- The existing pass files and docs in the original workspace are left untouched so their current paths remain valid.') | Out-Null
$summaryLines.Add('') | Out-Null
$summaryPath = Join-Path $outputRoot "README.md"
[System.IO.File]::WriteAllLines($summaryPath, $summaryLines)

Write-Output $outputRoot
