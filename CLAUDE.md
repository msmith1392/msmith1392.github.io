# CLAUDE.md - msmith1392.github.io

Personal portfolio site for Matthew Smith. Vite + React + TypeScript, deployed via GitHub Pages.

## Project Structure

```
src/
  components/   # Page-level and UI components
  hooks/        # Custom React hooks
  styles/       # Global CSS
  App.tsx       # Router and layout
  index.tsx     # Entry point
public/
  resume.pdf    # Browser-facing resume
  resume.docx   # Source resume document
```

## Stack

- Framework: React 18, TypeScript, Vite
- Routing: React Router v6 (HashRouter)
- Animations: Framer Motion
- Styling: Bootstrap 5, Bootstrap Icons, Tailwind, custom CSS
- Email: EmailJS
- Deployment: GitHub Pages via `gh-pages`

## TypeScript Standards

Governed by `tsconfig.json` and `eslint.config.mjs`. Always check both before making changes.

Key rules:
- `strict: true`, `noImplicitAny` - all variables and function return types must be explicitly typed
- `noUnusedLocals`, `noUnusedParameters` - no unused variables or parameters
- `noImplicitReturns` - all code paths must return
- `allowJs: false` - TypeScript only, no `.js` files in `src/`
- `@typescript-eslint/typedef` - variable declarations require explicit type annotations
- `@typescript-eslint/explicit-function-return-type` - all functions need explicit return types
- `@typescript-eslint/naming-convention` - camelCase for variables, PascalCase for types and components
- `no-inline-styles` - avoid inline style props, use CSS classes
- `react/jsx-pascal-case` - JSX components must be PascalCase
- `curly: all` - always use curly braces for control flow blocks

## Code Patterns

Follow existing component patterns. Reference `WorkExperience.tsx` as the canonical example for:
- Explicit type annotations on all declarations and function signatures
- Data arrays defined outside the component
- `useState` with explicit generic types
- Explicit function type annotations e.g. `const fn: (arg: Type) => ReturnType = (arg: Type): ReturnType => { ... }`

## Formatting

- Prettier is configured and enforced on save via `.vscode/settings.json`
- Default formatter: `esbenp.prettier-vscode`
- ESLint auto-fix on save is enabled

## Routing

All routes are defined in `App.tsx`. When adding a new page:
1. Create the component in `src/components/`
2. Import it in `App.tsx`
3. Add a `<Route>` inside `<AnimatedRoutes>`
4. Add a `<NavLink>` in `Header.tsx`

## Versioning & Deployment

- Branching: `develop` for active work, merge to `main` for releases
- Deploy: `npm run deploy` (builds and pushes to GitHub Pages)
- Tags: annotated tags on `main` after each release e.g. `git tag -a v2.4.0 -m "message"`
- Version follows semver: patch for fixes/wording, minor for new features/sections, major for full redesigns

## Content Notes

- Component content should reflect the current resume, keep site and resume in sync
- `useYearsOfExperience` hook drives dynamic year counts in `About.tsx`, do not hardcode years
