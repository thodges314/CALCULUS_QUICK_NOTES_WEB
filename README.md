# Calculus QuickNotes Web

A React web app port of the [Calculus Quick Notes Android app](https://play.google.com/store/apps/details?id=com.tutorillinois.android.calculusquicknotes), adding interactive D3 and Three.js visualizations to the original static content.

Live at: **[calculusquicknotes.com](https://calculusquicknotes.com)**

## Project History

This app was originally hosted on **iPage** (now Network Solutions). It has since been migrated to **GitHub Pages**, which offers tighter integration with the source repository and automatic deployment via GitHub Actions on every push to `master`.

### GitHub Pages Compatibility Notes

GitHub Pages serves only static files and has no server-side routing. The following are already in place to handle this correctly:

- **`404.html` trick** — The deploy workflow copies `build/index.html` to `build/404.html`. When a user navigates directly to a deep URL (e.g. `/PreCalculus/ShiftingGraphsWithHAndK`), GitHub Pages serves `404.html`, which loads the React app and lets React Router handle the route client-side. Without this, direct links and page refreshes would show a real 404.
- **Custom domain** — `package.json` has `"homepage": "https://calculusquicknotes.com"` and a `CNAME` file is committed to the repo. CRA uses the `homepage` value to correctly set asset paths at build time.
- **Code splitting** — Lazy-loaded page chunks are just static `.js` files served from GitHub Pages' CDN. `React.lazy()` requests them on demand exactly like any other static asset.

---

## Development

### Start the dev server

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). The page hot-reloads on file changes.

> **Tip:** If you see "Something is already running on port 3000", an old dev server is still running. Kill it first:
> ```bash
> lsof -ti :3000 | xargs kill -9
> npm start
> ```
> Running two servers simultaneously means your changes won't appear — you'll be testing against the old one.

---

## Deploying to GitHub Pages

**Deployment is fully automatic.** Just push to `master`:

```bash
git add .
git commit -m "your message"
git push
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Build the production bundle (`npm run build`)
3. Copy `index.html` → `404.html` (required for client-side routing on GitHub Pages)
4. Deploy the `build/` folder to the `gh-pages` branch

You can monitor the deployment under the **Actions** tab on GitHub. The live site updates within ~1 minute of the workflow completing.

> **Note:** You do **not** need to run `npm run build` or `npm run deploy` manually. Those commands exist but the GitHub Actions workflow handles everything on push.

---

## Architecture Notes

### Code Splitting

Pages are lazy-loaded using React's built-in `React.lazy()` + `Suspense`. Each page gets its own unique `lazy()` component so React fully unmounts the old page and mounts the new one on navigation — preventing stale content from ever being shown.

A `<LoadingPage />` fallback (animated) is shown while a page's chunk is loading.

Pages are registered in `src/pages/pageDirectory.json`. Adding a new page requires:
1. Creating `src/pages/[SectionName]/[PageName]/[PageName].jsx`
2. Adding the entry to `pageDirectory.json`

### Routing

Uses React Router v6 with `BrowserRouter`. Routes are built at module level from `pageDirectory.json` and matched to their lazy-loaded page components. The `basename` is set to `process.env.PUBLIC_URL` to support the custom domain.

### Interactive Elements

- **D3.js** — used for 2D interactive graphs (charts, series visualizations, etc.)
- **Three.js / React Three Fiber** — used for 3D visualizations (volume solids of revolution, etc.)
- **MathJax v2** — renders all mathematical notation via `better-react-mathjax`

### Styling

- **MUI (Material UI v7)** with Styled Components engine
- Custom color palette in `src/interactivity/resources/constants/`
- Global background color set via MUI `GlobalStyles`

---

## Key Dependencies

| Package | Purpose |
|---|---|
| `react-router-dom` | Client-side routing |
| `@mui/material` | UI component library |
| `d3` | 2D interactive data visualizations |
| `three` + `@react-three/fiber` + `@react-three/drei` | 3D visualizations |
| `better-react-mathjax` | MathJax v2 integration for math rendering |
| `big.js` | Arbitrary precision arithmetic for graph calculations |
| `troika-three-text` | 3D text rendering in Three.js scenes |
| `@loadable/component` | (Legacy — kept as installed dep, no longer used in routing) |
