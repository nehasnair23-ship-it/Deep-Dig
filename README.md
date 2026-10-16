# ⛏ Deep Dig

A 60-second competitive mining race that runs in the browser. One file, no build step.

- Easy / Medium / Hard, 30 / 60 / 90 second rounds
- Same world for everyone each day (seeded by date)
- Solo vs rival bots, combos, TNT, lava, upgrades
- Controls: tap left / middle / right of the mine, or arrow keys / A S D

## Play locally
Open `index.html` in a browser.

## Host on GitHub Pages
1. Create a new repo and upload `index.html` and `README.md`.
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
3. Your game is live at `https://<username>.github.io/<repo>/` after a minute.

## Note on multiplayer
Room-code multiplayer and the shared daily top 10 rely on the claude.ai artifact runtime.
Outside claude.ai they switch off automatically ("solo only"); everything else works.
To get live multiplayer on GitHub Pages you need your own backend (e.g. Firebase or Supabase).

## Install it like a real app (PWA, easiest)
After deploying to GitHub Pages, open the URL on your phone or PC:
- Android Chrome: menu → **Install app**
- iPhone Safari: Share → **Add to Home Screen**
- Desktop Chrome/Edge: install icon in the address bar
It then opens fullscreen with its own icon and works offline.

## Desktop game (.exe / .dmg / AppImage)
Needs Node.js. In the `desktop/` folder:
```
npm install
npm start          # test it
npm run build      # makes the installer in desktop/dist
```
Build on the OS you want (Windows for .exe, macOS for .dmg).

## Android APK / Play Store
Use https://www.pwabuilder.com with your GitHub Pages URL, or Capacitor (`npx cap add android`).
