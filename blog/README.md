# Hugo Blog – Minimal, no external theme

This is a small, dependency-light Hugo blog starter:
- Markdown posts under `content/posts`
- Tags, list pages, RSS enabled
- No Tailwind/PostCSS (keeps builds simple)
- Basic CSS in `assets/css/site.css`

## Local dev
- Install **Hugo Extended** (or use a Docker image).
- Run:
```bash
hugo server -D
```
Visit http://localhost:1313

## Build
```bash
hugo --minify
```
Outputs to `public/`.

## Deploy
Serve the `public/` directory with your existing NGINX container.
