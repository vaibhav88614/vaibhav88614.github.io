<#!
Safe sync helper.
Performs:
  1. Git status cleanliness check
  2. Stash (named) if uncommitted changes
  3. Pull with rebase from origin/main
  4. Pop stash (if created) with safety checks
  5. Show concise status summary
Supports -NoStash to skip stashing and -Branch to target another remote branch.
!>
[CmdletBinding()]
param(
  [string]$Branch = 'main',
  [switch]$NoStash
)

$ErrorActionPreference = 'Stop'
function Write-Step($msg){ Write-Host "[sync] $msg" -ForegroundColor Cyan }
function Write-Warn($msg){ Write-Host "[warn] $msg" -ForegroundColor Yellow }
function Write-Err($msg){ Write-Host "[error] $msg" -ForegroundColor Red }

# 1. Detect changes
$hasChanges = (git status --porcelain) -ne ''
$stashName = "auto-sync-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

if($hasChanges){
  if($NoStash){
    Write-Warn 'Working tree dirty and -NoStash provided. Aborting.'
    exit 2
  }
  Write-Step 'Stashing changes'
  git stash push -u -m $stashName | Out-Null
  $stashed = $true
}else{
  $stashed = $false
  Write-Step 'Working tree clean'
}

# 2. Fetch & pull with rebase
Write-Step "Fetching origin/$Branch"
 git fetch origin $Branch --prune
Write-Step 'Rebasing local onto remote'
 git pull --rebase origin $Branch

# 3. Pop stash if any
if($stashed){
  $topRef = (git stash list | Select-String -Pattern $stashName | Select-Object -First 1)
  if(-not $topRef){
    Write-Err 'Could not locate created stash. Manual intervention required.'
    exit 3
  }
  Write-Step 'Applying stashed changes'
  git stash pop | Out-Null
  if($LASTEXITCODE -ne 0){
    Write-Warn 'Conflicts occurred while applying stash. Resolve manually.'
    exit 4
  }
}

# 4. Summary
Write-Step 'Summary:'
Write-Host (git --no-pager log -1 --oneline) -ForegroundColor Green
Write-Host 'Pending changes:' -ForegroundColor Cyan
(git status --short) | ForEach-Object { Write-Host $_ }
Write-Step 'Done.'
