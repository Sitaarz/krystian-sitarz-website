# krystian-sitarz-website

A personal portfolio website built with Create React App (React 17). It presents the author's projects, resume, and links, and is structured for easy content updates.

Quick start

Install dependencies and run the development server:

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

Project structure (important files)

- [src/App.js](src/App.js) — application entry & routing (`react-router-dom` v6).
- [src/index.js](src/index.js) — React DOM bootstrap.
- [src/components/] — UI components grouped by page (Home, About, Projects, Resume).
- [src/components/Resume/ResumeNew.js](src/components/Resume/ResumeNew.js) — resume/pdf rendering using `react-pdf`.
- [src/components/Particle.js](src/components/Particle.js) — particle background using `react-tsparticles`.
- [src/style.css](src/style.css) and [src/App.css](src/App.css) — global styles.
- [src/Assets/] — image assets used by components (project thumbnails, tech icons).
- [public/index.html](public/index.html) — static HTML template.

Editing tips / conventions

- Components are functional and use React hooks. Follow existing hook patterns when adding state or effects (see [src/App.js](src/App.js)).
- Routing uses `<Routes>` + `element={...}` (React Router v6). For unknown routes the app redirects to `/` in [src/App.js](src/App.js).
- Add image assets to `src/Assets/Projects` or `src/Assets/TechIcons` and update imports in components that consume them.
- Keep styling local to components when possible; global overrides belong in `src/style.css`.

CI / repository notes

- A GitHub Actions workflow exists at [.github/workflows/master_krystian-sitarz.yml](.github/workflows/master_krystian-sitarz.yml). Run `npm run build` locally to validate CI expectations before pushing changes.

When updating documentation

- Merge any human-written guidance instead of overwriting it. If you want, I can expand this README with deployment instructions (Netlify, Vercel), or add contributor/PR guidelines.

Originally forked from [Soumyajit Portfolio](https://github.com/soumyajit4419/Portfolio).
