# Repository Guidelines

## Project Structure & Module Organization
- Next.js 14 app with route components under `pages/`; marketing pages use `.jsx` files (e.g., `pages/cybersecurity.jsx`), while blog routes live in `pages/blog` and load markdown via `lib/posts.js`.
- Reusable layouts, forms, and widgets sit in `components/` (mix of `.jsx` and `.tsx`); colocate helper modules beside the component to keep imports local.
- Markdown articles live in `posts/` and require `title`, `date`, and `excerpt` front matter so chronological ordering works.
- Keep static media in `public/` and global overrides in `styles/globals.css`; never commit `.next/` or other build artifacts.

## Build, Test, and Development Commands
- `npm install` (or `npm ci` for CI) installs dependencies in sync with `package-lock.json`.
- `npm run dev` starts the Next.js dev server on http://localhost:3000 with hot reload for authoring pages and posts.
- `npm run build` creates the optimized production bundle and runs type checks; fix warnings before shipping.
- `npm run start` serves the production bundle and is only valid after a successful build.
- `npm run lint` runs the project ESLint config; treat failures as blockers and rerun before opening a PR.

## Coding Style & Naming Conventions
- Follow 2-space indentation, single quotes, and trailing semicolons consistent with `pages/*.jsx`.
- Default-export page components, keep helpers local, and prefer PascalCase for shared components and kebab-case filenames for routes.
- TypeScript components should compile under the existing `tsconfig.json`; avoid new compiler options without discussion.

## Testing Guidelines
- No automated tests yet; rely on `npm run lint`, manual smoke tests via `npm run dev`, and verifying blog markdown renders as expected.
- Store any future specs alongside components with a `.test.tsx` suffix and keep them opt-in until a harness is standardized.

## Commit & Pull Request Guidelines
- Use short, lowercase prefixes seen in history (e.g., `fix: broken carousel`) and keep commit scope tight.
- PRs should summarize changes, link issues, call out content or config impacts, and include screenshots or clips for visual updates.
- Confirm `npm run lint` and `npm run build` results locally, and document any new environment expectations in the PR.

## Configuration & Environment Notes
- `components/ServedByComponent.tsx` reads `NEXT_PUBLIC_EE_HOST_ID` or `EE_HOST_ID`; ensure one is set per deployment.
- Never commit `.env` files; record required variables in documentation or deployment tooling instead.
