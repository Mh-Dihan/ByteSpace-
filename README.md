# ByteSpace (React + Vite)

## Setup
```
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Build
```
npm run build
```
Output goes to `dist/`.

## Structure
- `src/components/` – section components used on the home page (Navbar, Hero, Partners, About, Features, Courses, Stats, Testimonials, Cta, Footer)
- `src/pages/` – Home, Login, Register pages
- `src/index.css` – all styling (design tokens as CSS variables at the top)
- `src/assets/logo.svg` – logo mark

Routing is handled by `react-router-dom`: `/` (home), `/login`, `/register`.
