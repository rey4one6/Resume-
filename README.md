# Rey's resume site → resume.rbroadie.ca

Single-page static resume site (`index.html`, no build step).
`server.js` + `package.json` are only there so Railway has something to run.

## 1. Push to GitHub

```bash
cd ~/resume-site
git init -b main
git add index.html server.js package.json
git commit -m "Resume site"
gh repo create resume --public --source=. --push
```

No `gh` CLI? Create an empty public repo called `resume` on github.com, then:

```bash
git remote add origin git@github.com:rey4one6/resume.git
git push -u origin main
```

## 2. Deploy on Railway

1. Railway → New Project → Deploy from GitHub repo → pick `rey4one6/resume`.
2. Railway auto-detects Node via `package.json` and runs `npm start`.
3. Wait for deploy, open the Railway URL to confirm the site loads.

## 3. Point resume.rbroadie.ca at it

1. Railway project → Settings → Networking → Custom Domain → add `resume.rbroadie.ca`.
   Railway shows a CNAME target (something like `xxx.up.railway.app`).
2. Cloudflare → rbroadie.ca → DNS → add CNAME:
   - Name: `resume`
   - Target: the Railway hostname
   - Proxy: **DNS only** (grey cloud) — Railway handles TLS itself.
3. Wait a few minutes, open https://resume.rbroadie.ca.

## Editing later

Edit `index.html`, commit, push — Railway redeploys automatically.

<!-- trigger pages deploy -->
