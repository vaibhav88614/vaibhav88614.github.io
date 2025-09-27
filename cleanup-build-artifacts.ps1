<#
Non‑destructive cleanup of legacy build artifacts that were previously copied into the repository *root*.
It simply MOVES matching files into a backup folder (default: _old-root-build). Nothing is deleted.

Why you saw the `parameter name 'and'` error:
Some shells / older PS sessions occasionally mis-parse a script marked as an advanced function ([CmdletBinding])
when no parameters are passed and a conditional uses `-and` early on. This simplified version removes
advanced binding to avoid that edge case.

Patterns moved:
  index-*.js, index-*.css (root hashed Vite outputs)

Usage:
  powershell -ExecutionPolicy Bypass -File ./cleanup-build-artifacts.ps1
  # or
  ./cleanup-build-artifacts.ps1

Optional:
  ./cleanup-build-artifacts.ps1 _myBackup
#>
param(
  [string]$BackupDir = '_old-root-build'
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path .)) { throw 'Script must be run from repo root.' }

Write-Host '== Cleanup (non-destructive) ==' -ForegroundColor Cyan
if (-not (Test-Path $BackupDir)) { New-Item -ItemType Directory -Path $BackupDir | Out-Null }

$patterns = 'index-*.js','index-*.css'
$filesMoved = New-Object System.Collections.Generic.List[string]

foreach ($pat in $patterns) {
  Get-ChildItem -Path . -Filter $pat -File -ErrorAction SilentlyContinue | ForEach-Object {
    $dest = Join-Path $BackupDir $_.Name
    Move-Item -LiteralPath $_.FullName -Destination $dest -Force
    $filesMoved.Add($_.Name) | Out-Null
  }
}

# Duplicate asset names report (optional informational)
if ((Test-Path 'docs/assets') -and (Test-Path 'assets')) {
  $dup = Get-ChildItem 'assets' -File | Where-Object { Test-Path (Join-Path 'docs/assets' $_.Name) }
  if ($dup) {
    $dupReport = Join-Path $BackupDir 'DUPLICATE_ASSETS.txt'
    $dup | Select-Object -ExpandProperty Name | Sort-Object | Out-File -FilePath $dupReport -Encoding UTF8
    Write-Host "Duplicate asset names recorded in $dupReport" -ForegroundColor Yellow
  }
}

if ($filesMoved.Count -eq 0) {
  Write-Host 'No root build artifacts matched patterns.' -ForegroundColor DarkGray
} else {
  Write-Host ("Moved {0} files -> {1}" -f $filesMoved.Count, $BackupDir) -ForegroundColor Green
}

Write-Host 'Done. Inspect backup dir and delete when satisfied.' -ForegroundColor Cyan
