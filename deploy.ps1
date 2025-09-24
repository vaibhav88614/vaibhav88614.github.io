# PowerShell script to automate Vite build and deploy for GitHub Pages user/organization site

# 1. Build the project
npm run build

# 2. Copy build output to root and assets
Copy-Item -Path dist\* -Destination . -Recurse -Force
Copy-Item -Path dist\assets\* -Destination assets\ -Force

# 3. Add, commit, and push changes
git add .
git commit -m "deploy: update site after changes"
git push
