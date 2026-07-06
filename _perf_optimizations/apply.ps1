# Biztalbox performance optimizations - apply script
# Run from anywhere:  powershell -ExecutionPolicy Bypass -File .\apply.ps1
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot   # repo root (parent of _perf_optimizations)
$files = Join-Path $PSScriptRoot "files"

Write-Host "Repo root: $root"
Set-Location $root

# 1) make sure we're on dev with a clean tree
# git rev-parse --is-inside-work-tree | Out-Null
# $status = git status --porcelain
# if ($status) {
#   Write-Host "WARNING: working tree not clean. Commit/stash pehle kar lo, phir dobara chalao." -ForegroundColor Yellow
#   exit 1
# }
# git checkout dev
# git pull origin dev

# 2) copy optimized files over the repo
robocopy $files $root /S /NFL /NDL /NJH /NJS | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy failed" }
Write-Host "Optimized files copied." -ForegroundColor Green

# 3) commit on a new branch
git checkout -b perf/speed-optimizations
git add -A
git commit -m "perf: massive load-time optimization for light & dark home (models, fonts, lazy 3D, caching)"
Write-Host ""
Write-Host "Done! Ab verify karo:" -ForegroundColor Green
Write-Host "  yarn build   (ya npm run build)"
Write-Host "  yarn dev     -> light + dark home check karo"
Write-Host "Phir push: git push -u origin perf/speed-optimizations"
