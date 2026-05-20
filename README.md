# msmith1392.github.io — Archived

> **This project is retired.** The site now redirects to [matthewbsmith.com](https://matthewbsmith.com).
> Active development has moved to [mbs](https://github.com/msmith1392/mbs).

---

## What this was

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS. Served via GitHub Pages at `msmith1392.github.io`. Retired in May 2026 in favor of a custom domain and a new stack.

The original source is preserved in the commit history. The final version of the React app is tagged `v3.1.0`.

## What this is now

The `gh-pages` branch serves a static redirect from `msmith1392.github.io` to `matthewbsmith.com`. No build step is required.

```
redirect/
  index.html   # instant JS + meta-refresh redirect for all traffic
  404.html     # catches stale deep links, redirects to root
```

## Deploy

```sh
npm run deploy   # pushes redirect/ to gh-pages branch via gh-pages
```

No `.env` file or build step needed.

## Disclaimer

Personal project. Feel free to use the code for learning but do not present it as your own work.
