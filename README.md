# Matthew Smith – Portfolio & Resume Site

This is my personal website and interactive resume, built with **React**, **TypeScript**, and **Vite**.  
It showcases my experience, skills, and work history, and demonstrates my ability to build modern web apps.

**Live site:** [https://msmith1392.github.io](https://msmith1392.github.io)

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started with Vite

### Prerequisites

- [Node.js](https://nodejs.org/) v20+ recommended (works with v18+ for Vite 5.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- **Tip:** Use [nvm](https://github.com/coreybutler/nvm-windows) (Windows) or [nvm-sh/nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) to easily manage multiple Node.js versions on your machine.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/msmith1392/msmith1392.github.io.git
   cd msmith1392.github.io
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development

Start the local development server:
```sh
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To build the app for production:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist/` directory.

### Preview Production Build

To locally preview the production build:
```sh
npm run preview
# or
yarn preview
```

### Deployment

This site is deployed to [https://msmith1392.github.io](https://msmith1392.github.io) using GitHub Pages.

To deploy:

```sh
npm run build
npm run deploy
```

## Environment Variables

- Environment variables should be prefixed with `VITE_` (e.g., `VITE_API_URL`) and accessed via `import.meta.env.VITE_API_URL`.

## License

[MIT](LICENSE)

## Contributing

This project is intended as a personal portfolio and is not accepting external contributions.

## Disclaimer

This is a personal project serving as my personal website and interactive resume. Feel free to explore or use the code for learning, but please do not present it as your own work.

---

_This project was migrated from Create React App to Vite for faster builds, modern tooling, and easier maintenance._