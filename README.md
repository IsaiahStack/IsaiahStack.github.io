# Portfolio

A personal software engineering portfolio — home page, project showcase, and
contact links. Statically exported and hosted on GitHub Pages.

## Technologies

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- Plain modern CSS (CSS Modules + custom properties, no UI framework)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally. The
page auto-updates as you edit files under `src/`.

## Build

```bash
npm run build
```

Because `next.config.ts` sets `output: "export"`, this produces a fully
static site in `out/` — plain HTML/CSS/JS, no Node.js server required. To
preview that exact build locally:

```bash
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `out/` to GitHub Pages via GitHub's official Pages
actions. No server, database, or third-party hosting is involved.

One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**.

## Project structure

```
src/
  app/            Routes: / (home), /projects, /contact
  components/     Navbar, Footer, Hero, Skills, ProjectCard, ContactLink
  data/           projects.ts — edit this to add/update projects
```

## Editing content

- **Personal info & contact details**: `src/components/Hero.tsx`,
  `src/app/contact/page.tsx`, `src/components/Footer.tsx`
- **Projects**: `src/data/projects.ts`
- **Skills**: `src/components/Skills.tsx`
- **Site name / description**: `src/app/layout.tsx`
