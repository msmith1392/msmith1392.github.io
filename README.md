# Matthew Smith – Portfolio Site

Personal portfolio and resume site.

**Live site:** [https://msmith1392.github.io](https://msmith1392.github.io)

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)
- [EmailJS](https://www.emailjs.com/) (contact form)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) (code quality)

## Development

```sh
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

## Linting & Formatting

```sh
npx eslint .                  # lint
npx eslint . --fix            # auto-fix lint errors
npx prettier --check .        # check formatting
npx prettier --write .        # auto-format
```

Inline styles are disallowed (`eslint-plugin-no-inline-styles`). Use Tailwind classes instead.

## Build & Deploy

```sh
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run deploy    # build + push to GitHub Pages
```

## Environment Variables

Create a `.env` file at the repo root (not committed to git):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## VS Code

A `.vscode/settings.json` is committed to the repo. It enables format-on-save via Prettier and ESLint auto-fix on save.

Recommended extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Updating Content

- **Experience, skills, projects, education** — edit the data arrays at the top of each component in `src/components/`
- **Years of experience** — auto-calculated from `CAREER_START` in `src/constants.ts`
- **Company count** — update `COMPANY_COUNT` in `src/constants.ts`
- **Photo** — drop a file into `public/` and update the `src` in `Hero.tsx`
- **Resume PDF** — replace `public/resume.pdf`

## Disclaimer

Personal project. Feel free to use the code for learning but do not present it as your own work.
