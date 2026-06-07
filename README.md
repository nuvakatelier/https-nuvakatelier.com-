# NUVAK Modular Website

This version is split into editable partial HTML files so each section can be modified without touching the whole page.

## Live entry file

- `index.html` is the public page used by GitHub Pages.
- It loads the sections from `/partials/` using `assets/js/include.js`.

## Edit sections here

- `partials/nav.html` — menu and logo
- `partials/hero.html` — first screen
- `partials/about.html` — brand statement
- `partials/piece.html` — first product/piece
- `partials/process.html` — process cards
- `partials/maker.html` — maker story
- `partials/details.html` — gallery/details
- `partials/waitlist.html` — waiting list form
- `partials/footer.html` — footer

## Edit styles here

- `assets/css/styles.css`

## Edit images here

- `assets/`

## Important

This modular version works directly on GitHub Pages because the browser loads the partials dynamically. Do not open `index.html` by double-clicking locally, because browser security may block loading the partial files. Test through GitHub Pages or a local server.

For a quick local preview, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
