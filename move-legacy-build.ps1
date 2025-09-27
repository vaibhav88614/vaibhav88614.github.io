<#
Moves legacy root-level hashed build artifacts (assets/...) into _legacy_root_build for archival.
Does NOT touch docs/ (current deployment output).
Safe to run multiple times; skips if destination exists.
#>
[CmdletBinding()]
param(
  [string]$Source = 'assets',
  [string]$Archive = '_legacy_root_build'
)

$ErrorActionPreference = 'Stop'
if (-not (Test-Path $Source)) { Write-Host "No '$Source' directory found. Nothing to move." -ForegroundColor Yellow; exit 0 }
if (-not (Test-Path $Archive)) { New-Item -ItemType Directory -Path $Archive | Out-Null }

Write-Host "Archiving legacy build folder '$Source' -> '$Archive'" -ForegroundColor Cyan
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$dest = Join-Path $Archive "assets-$timestamp"
Move-Item -LiteralPath $Source -Destination $dest
Write-Host "Moved to $dest" -ForegroundColor Green
Write-Host 'If satisfied, you can delete older archived folders later.' -ForegroundColor Gray