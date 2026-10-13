# Rey's resume site → resume.rbroadie.ca

Single-page static resume site (`index.html`, no build step, no JavaScript).
Hosted on Cloudflare Pages, deployed from the `rey4one6/Resume-` repo.

## How it deploys

1. Edit `index.html`, commit, push to `main`.
2. Cloudflare Pages auto-deploys from GitHub (official Cloudflare Pages GitHub App).
3. Custom domain `resume.rbroadie.ca` is bound in Pages + CNAME in the `rbroadie.ca` zone.

## Editing later

Edit `index.html`, commit, push — Pages redeploys automatically.
