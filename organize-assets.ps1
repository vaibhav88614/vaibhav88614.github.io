<#
Organize assets non-destructively.
Copies image files (jpg,jpeg,png,svg,gif,webp,avif) from:
  src/assets -> public/images
  assets     -> public/images (legacy root build assets)
Does NOT delete originals (you can remove later once verified).
Skips duplicates (based on file name) unless -Force.
#>
[CmdletBinding()]
param(
  [switch]$Force,
  [string]$Target = 'public/images'
)

$ErrorActionPreference = 'Stop'
if (-not (Test-Path $Target)) { New-Item -ItemType Directory -Path $Target | Out-Null }

$extensions = '.png','.jpg','.jpeg','.svg','.gif','.webp','.avif'
$sourceDirs = @('src/assets','assets') | Where-Object { Test-Path $_ }

$copied = 0
foreach($dir in $sourceDirs){
  Get-ChildItem -Path $dir -File -Recurse | Where-Object { $extensions -contains $_.Extension.ToLower() } | ForEach-Object {
    $dest = Join-Path $Target $_.Name
    if ( (Test-Path $dest) -and (-not $Force) ) {
      Write-Host "Skip (exists): $($_.Name)" -ForegroundColor DarkGray
      return
    }
    Copy-Item -LiteralPath $_.FullName -Destination $dest -Force
    Write-Host "Copied: $($_.Name)" -ForegroundColor Green
    $copied++
  }
}
Write-Host "Done. Copied $copied file(s) to $Target" -ForegroundColor Cyan
Write-Host 'Update any references to use /images/<name> after you commit.' -ForegroundColor Yellow
