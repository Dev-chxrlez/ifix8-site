# IFix8 — Phone Repair Landing Page

Landing page for IFix8, a phone repair service in Admiral, Talon Tres, Las Piñas City.

Plain HTML, CSS and JavaScript — no build step.

## Files

- `index.html` — page content and booking form
- `styles.css` — styles
- `script.js` — English / Tagalog toggle, scroll animations, form submit
- `favicon.svg` — logo mark
- `netlify.toml` — Netlify settings

## Run locally

Open `index.html` in a browser. (The booking form only works once deployed to Netlify.)

## Deploy

Hosted on Netlify, connected to this GitHub repo. Every push to `main` redeploys automatically.

Booking requests show up in the Netlify dashboard under **Forms → booking**. Turn on email notifications there under **Forms → Form notifications**.

## Editing text

All visible text lives in `script.js` under `T.en` (English) and `T.tl` (Tagalog). English is also in `index.html` as the default.
