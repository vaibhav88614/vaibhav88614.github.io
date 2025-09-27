<#!
Simplified deployment script for GitHub Pages using 'docs' directory.

Now that Vite outputs directly to docs/ (see vite.config.ts build.outDir), we only:
 1. Ensure clean (or forced) working tree
 2. Run build (which empties and repopulates docs/ via Vite)
 3. Ensure .nojekyll exists
 4. Commit & push if changes

Usage:
  ./deploy.ps1           # normal deploy
  ./deploy.ps1 -Force    # deploy even with uncommitted changes
!#>
param(
  [switch]$Force,
  [string]$DocsDir = 'docs'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Section($msg) { Write-Host "`n=== $msg ===" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[warn] $msg" -ForegroundColor Yellow }
function Write-Info($msg) { Write-Host "[info] $msg" -ForegroundColor DarkGray }

# 0. Preconditions -----------------------------------------------------------
Write-Section 'Preflight checks'

if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'git not found in PATH.' }
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) { throw 'npm not found in PATH.' }

$status = git status --porcelain
if ($status -and -not $Force) {
	Write-Warn 'Working tree has uncommitted changes. Commit or stash them, or use -Force.'
	exit 1
}

Write-Info "Using docs directory deployment"

# 1. Build ------------------------------------------------------------------
Write-Section 'Building project'
npm run build | Write-Host

if (-not (Test-Path $DocsDir)) { throw "Expected build output directory '$DocsDir' not found." }

# Ensure .nojekyll (prevents GitHub Pages from processing) & optional CNAME support placeholder
if (-not (Test-Path (Join-Path $DocsDir '.nojekyll'))) { New-Item -ItemType File -Path (Join-Path $DocsDir '.nojekyll') | Out-Null }

git add $DocsDir
if (git diff --cached --quiet) {
  Write-Info 'No deployment changes to commit.'
} else {
  $hash = git rev-parse --short HEAD
  git commit -m "deploy: update docs from $hash"
  git push
}

Write-Section 'Done'
Write-Host 'Deployment complete.' -ForegroundColor Green
