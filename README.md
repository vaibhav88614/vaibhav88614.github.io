![Portfolio Banner](public/images/developer-illustration.jpg)

# 🚀 Vaibhav's Portfolio

Modern, responsive developer portfolio built with React, Vite, TypeScript, Tailwind CSS (shadcn/ui + Radix primitives), and a clean deployment pipeline via GitHub Pages.
![Banner](src/assets/developer-illustration.jpg)

# 🚀 Vaibhav's Portfolio

Modern, resume‑driven developer portfolio built with React + Vite + TypeScript + Tailwind (shadcn/ui + Radix primitives) and deployed via GitHub Pages (`/docs`).

---

## 🖥️ Live Demo
[View Portfolio](https://vaibhav88614.github.io)

---

## 📦 Tech Stack
- React (TypeScript)
- Vite build tooling
- Tailwind CSS + tailwind-merge + tailwindcss-animate + @tailwindcss/typography
- shadcn/ui (Radix primitives)
- ESLint (flat config) + Prettier + TypeScript type checking

---

## 🧩 Key Features
- Resume‑driven sections (single source of truth in `src/data/resume.ts`)
- Dynamic Last Updated & experience duration bar
- Dark / Light theme toggle (light is default; `.dark` class enables dark)
- Accessible, responsive UI components
- Centralized design tokens via CSS custom properties (HSL)
- Clean GitHub Pages deployment to `docs/`
- Lockfile URL sanitizer (removes any internal/private registry host traces)

---

## 📁 Relevant Structure (trimmed)
```
src/
	assets/                    # Source images
	components/                # Site + UI components
		ui/                      # shadcn primitives
	data/
		resume.ts                # SINGLE SOURCE OF TRUTH for content
	pages/
		Index.tsx                # Home page (assembles sections)
	App.tsx / main.tsx         # Entrypoints
	index.css                  # Tailwind directives + global styles
public/
	resume.pdf                 # Downloaded resume file (replace with your own)
docs/                        # Production build output (served by Pages)
```

---

## 📰 Resume‑Driven Content Model
All portfolio text/content (except very small static labels) is generated from the exported `resume` object in `src/data/resume.ts`.

### Shape Overview
```
export const resume = {
	lastUpdated: Date,
	summary: string,
	skills: { languages: string[]; frontend: string[]; backend: string[]; frameworks: string[]; databases: string[]; apis: string[]; tools: string[]; quality: string[] },
	education: [{ degree, institution, start, end, gpa }],
	experience: [{ title, company, location, start, end, bullets: string[] }],
	projects: [{ name, year, tech: string[], bullets: string[], links: { live: string, source: string } }],
	certifications: [{ name, link }],
	contact: { email, portfolio, location, phone }
}
```

### Updating Your Info
1. Edit fields in `src/data/resume.ts`.
2. Replace `public/resume.pdf` with your actual PDF (keep the filename `resume.pdf` so the download link continues to work).
3. Adjust the `lastUpdated` date whenever you materially change resume data (or leave it and the site will still build). The footer & top metadata strip both use this value.
4. Add/remove experiences or education entries as arrays—UI will adapt. Experience duration (years/months) uses ONLY the first experience entry (assumed current / most relevant). Place your current role first.
5. Project `links.live` and `links.source` currently contain placeholder URLs—swap them with your real deployment and repository URLs. Empty strings will simply render no external buttons (defensive checks can be added if needed).
6. Certification `link` values can also be placeholders; replace when you have verifiable URLs or badge links.

### Experience Duration Logic
On the home page metadata bar we compute the elapsed time between the first experience `start` and either now (if `end === 'Present'`) or the parsed `end` date. Format: `Xy Ym` or `Xm` if under a year. If you want cumulative or multiple role logic, extend the calculation in `pages/Index.tsx`.

### Skill Icons
`SkillsSection.tsx` uses a simple `iconMap` (emoji characters). To customize:
1. Open `src/components/SkillsSection.tsx`.
2. Replace an emoji value with any string, or swap the rendering with an imported SVG / Lucide icon.
3. For richer icons, you can import from `lucide-react` and store JSX in a map instead of strings.

### Adding New Fields
If you add a new property to `resume`, export a TypeScript type for it and update whichever component consumes it. Centralization ensures consistency.

---

## 🌓 Theming
- Light theme is default (CSS custom properties on `:root`).
- Dark theme overrides live under the `.dark` class.
- The toggle sets `localStorage['theme-preference']` to `light` or `dark` and adds/removes `.dark` on `<html>` early to avoid FOUC.
Modify behavior in `index.html` inline script + `ThemeToggle` component if you change the storage key.

---

## 🛠️ Development
```powershell
git clone https://github.com/vaibhav88614/vaibhav88614.github.io.git
cd vaibhav88614.github.io
npm install
npm run dev
```
Production build:
```powershell
npm run build
```
Lint & typecheck:
```powershell
npm run lint
```
Format:
```powershell
npm run format
```

---

## 🚀 Deployment (GitHub Pages `/docs`)
Vite outputs to `docs/` (see `vite.config.ts`). Configure Pages → Branch: `main`, Folder: `/docs`.
```powershell
npm run build
./deploy.ps1
```
Force (skips clean working tree check):
```powershell
./deploy.ps1 -Force
```
Add a `docs/CNAME` file for a custom domain.

---

## 🔐 Lockfile URL Sanitization
A pre-commit hook normalizes `package-lock.json` to remove any non-public registry hostnames and auto-fixes malformed tarball URLs. CI fails if any resolved URL is missing the expected `/-/` pattern (integrity guard).

---

## ✅ Git Hooks
On commit:
1. Normalize & restage lockfile if changed
2. ESLint + TypeScript check
3. (Optional) You can bypass with `--no-verify` (not recommended)

---

## ✉️ Contact Form (Optional)
If using Formspree, set `VITE_FORMSPREE_ENDPOINT` in an `.env.local` file. Without it, the Contact section will display a configuration warning on submit.

---

## � Bundle Analysis
```powershell
npm run analyze
```
Generates `stats/bundle-analysis.html`.

---

## 🧪 Updating / Extending Projects
Projects are consumed from `resume.projects`. Each `bullets` array is joined into a description—if you need richer formatting, map them into a list in `ProjectsSection.tsx` instead of joining.

---

## 🗂️ Replacing the Resume PDF
Replace `public/resume.pdf` with your own file (keep the same name). The About section & dedicated download buttons automatically reference it.

---

## 🛠️ Editor Tips
- Ensure Tailwind CSS IntelliSense is installed.
- If you rename or move `index.css`, update imports in `main.tsx`.
- Keep all Tailwind layer directives consolidated (currently in `index.css`).

---

## 🌐 Social Links
Footer social array lives in `src/components/FooterNEW.tsx`. Update the placeholder X (formerly Twitter) handle URL when ready.

---

## 📜 License
MIT © 2025 Vaibhav

---

> Designed & developed by Vaibhav




The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm run dev
```


**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.

This project is built with:

- Vite
- TypeScript
- React
[![Portfolio Banner](public/images/developer-illustration.jpg)](https://vaibhav88614.github.io)

# 🚀 Vaibhav's Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects as a developer. Built with modern web technologies, it features a clean, responsive, and visually appealing design.

---

## 🖥️ Live Demo

[View Portfolio](https://vaibhav88614.github.io)

---

## 📦 Tech Stack

- **React** (TypeScript)
- **Vite** (Fast build tool)
- **Tailwind CSS** (Utility-first CSS framework)
- **ESLint** (Linting)
- **PostCSS** (CSS transformations)

---

## 🧩 Features

- Responsive design for all devices
- Interactive sections: About, Skills, Projects, Experience, Education, Contact
- Modern UI components (Accordion, Cards, Carousel, Dialogs, Toasts, etc.)
- Smooth navigation and transitions
- Custom hooks for mobile and toast notifications
- Optimized images and assets

---

## 📁 Project Structure (Updated)

```
src/
	assets/             # Source images (originals)
	styles/             # Centralized style layers
		base.css          # Tailwind layers + global base
		design-tokens.css # CSS custom properties / theme tokens
		animations.css    # Animation utilities & keyframes
	components/         # Reusable UI components
		ui/               # UI primitives (accordion, button, etc.)
	hooks/              # Custom React hooks
	lib/                # Utility functions
	pages/              # Main pages (Index, NotFound)
	main.tsx            # App entry (imports consolidated styles)
public/
	images/             # Deployed static images (copied via organize-assets.ps1)
docs/                 # Vite build output (served by GitHub Pages)
```

### Asset Workflow
- Keep canonical images in `src/assets/`.
- Run `./organize-assets.ps1` to copy them into `public/images/` for stable public paths `/images/...`.
- Build places processed/hased files inside `docs/` automatically.

### Style Workflow
- Do not add Tailwind directives in scattered files—keep them in `styles/base.css`.
- Add/modify design tokens in `styles/design-tokens.css`.
- Add new animations to `styles/animations.css`.

---

## 🛠️ Setup & Development

1. **Clone the repo**
	```sh
	git clone https://github.com/vaibhav88614/vaibhav88614.github.io.git
	cd vaibhav88614.github.io
	```
2. **Install dependencies**
	```sh
	npm install
	```
3. **Start development server**
	```sh
	npm run dev
	```
4. **Build for production**
	```sh
	npm run build
	```

---

## � Deployment (GitHub Pages via docs/)

This repository is configured so Vite outputs directly into the `docs/` folder (see `vite.config.ts`). GitHub Pages should be set to:

Branch: `main`  |  Folder: `/docs`

### Deploy steps

```sh
# Build & deploy
npm run build
./deploy.ps1
```

The script will:
- Ensure the working tree is clean (unless you pass `-Force`)
- Confirm `docs/` exists and add `.nojekyll`
- Commit only if build output changed

### One-liner (force deploy)
```powershell
./deploy.ps1 -Force
```

### Custom domain (optional)
Add a `CNAME` file inside `docs/` containing your domain name.

---

## 🧹 Cleaning Legacy Build Artifacts

If you previously copied hashed build files (e.g. `index-XYZ.js`) into the repo root, you can move them out non-destructively:

```powershell
./cleanup-build-artifacts.ps1
```

Moved files live in `_old-root-build/`. Inspect and delete when you're satisfied.

---

## 🗂️ Organizing Assets

To copy all current raw images into `public/images/` (non-destructive):

```powershell
./organize-assets.ps1
```

Add `-Force` to overwrite duplicates if filenames collide:

```powershell
./organize-assets.ps1 -Force
```

Then reference them in code or meta tags as `/images/<name>`.

---

---

## �📚 Portfolio Sections

- **Hero**: Introduction and profile
- **About**: Background and story
- **Skills**: Technologies and tools
- **Projects**: Featured work with images
- **Experience**: Professional journey
- **Education**: Academic history
- **Contact**: Get in touch
- **Footer**: Social links & copyright

---

## 🌟 Screenshots

![Hero Section](public/images/developer-illustration.jpg)
![Projects Section](public/images/blog-project.jpg)

---

## 🤝 Connect

- [LinkedIn](#)
- [GitHub](https://github.com/vaibhav88614)
- [Email](mailto:your.email@example.com)

---

## �️ Editor Tailwind Setup

If your editor flags `@tailwind`, `@apply`, or `@layer` as unknown:
- VS Code: ensure Tailwind CSS IntelliSense extension is installed
- We ship `.vscode/settings.json` that sets `css.lint.unknownAtRules` to `ignore`
- `.stylelintrc.json` ignores Tailwind-specific at-rules
- Only import `src/styles/index.css` once (it contains directives + imports)
- Keep custom CSS variables in `design-tokens.css`; avoid spreading `@tailwind` directives across files

Re-run the dev server after changing Tailwind config so class generation updates.

---

## �📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Designed & developed by Vaibhav
Tailwind CSS


