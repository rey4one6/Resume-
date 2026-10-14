# Rey's resume site → resume.rbroadie.ca

Single-page static resume site (`index.html`, no build step).
Hosted on Cloudflare Pages, deployed from the `rey4one6/Resume-` repo.

## Themes

A theme switcher (🎨 button in the header) cycles the site through palettes
taken from the [micro](https://micro-editor.github.io/) text editor's
colorschemes: Kanagawa Dragon (default), Monokai, Solarized Dark, Gruvbox,
Dracula, One Dark, Duke Light. The visitor's choice is saved in
`localStorage` (`resume-theme`) and applied before first paint so there's
no flash of the default theme.

## How it deploys

1. Edit `index.html`, commit, push to `main`.
2. Cloudflare Pages auto-deploys from GitHub (official Cloudflare Pages GitHub App).
3. Custom domain `resume.rbroadie.ca` is bound in Pages + CNAME in the `rbroadie.ca` zone.

## Editing later

Edit `index.html`, commit, push — Pages redeploys automatically.
