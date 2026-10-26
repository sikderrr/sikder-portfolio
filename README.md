# Sikder Rakibul Islam — Portfolio

A lightweight, responsive portfolio site built with plain HTML, CSS, and JavaScript. It has no build step, backend, or paid services and can be hosted on GitHub Pages.

## Preview locally

Open `index.html` in a browser, or run a simple static server from this folder (for example, `python -m http.server 8000`) and visit `http://localhost:8000`.

## Add your work

Edit the `portfolio` object near the top of `script.js`:

- Project titles, descriptions, video links, roles, software, and image paths live together in the `projects` array.
- Add or replace a YouTube URL in a project's `video` field.
- Set the `image` field to a path such as `assets/projects/voyager-1.webp`.
- Update `role` and `tools` with your exact contribution and software.
- Edit the `thumbnails` list on a project to add or replace alternate thumbnail options in its detail view.

Keep your media in `assets/`. Suggested locations are `assets/projects/` and `assets/design/`. The supplied Voyager 1, India Needs Jobs, and Uttar Pradesh thumbnail designs are included as optimized WebP images in `assets/design/` and shown in their matching project previews. The project detail view loads its YouTube player only after a visitor presses play. No results, clients, awards, or credentials are fabricated.

## Publish on GitHub Pages

1. Push this folder to your GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select your publishing branch and `/ (root)`, then save.

The site uses document-relative asset paths, so it works both at a root domain and under a repository subpath. If you later use a custom domain, update the canonical and social sharing URLs when adding them to the metadata.

## Accessibility and performance

Semantic landmarks, keyboard-operable dialogs, visible focus styles, and reduced-motion support are included. Replace Google Fonts with locally hosted typefaces if you prefer to remove the external font request.
