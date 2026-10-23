# IFix8 — Phone Repair Landing Page

Landing page for IFix8, a phone repair service in Admiral, Talon Tres, Las Piñas City.

Plain HTML, CSS and JavaScript, plus one Netlify Function for the AI chat.

## Files

- `public/index.html` — page content, booking form and chat widget
- `public/styles.css` — styles
- `public/script.js` — English / Tagalog toggle, scroll animations, form submit, chat widget
- `public/favicon.svg` — logo mark
- `public/images/render-*.svg` — phone renders in the services section (original vector art)
- `netlify/functions/chat.mjs` — AI support chat backend (`/api/chat`), calls Claude
- `netlify.toml` — Netlify settings (publishes `public/`)

## Run locally

Open `public/index.html` in a browser. The booking form and the chat only work once deployed to Netlify.

## Deploy

Hosted on Netlify, connected to this GitHub repo. Every push to `main` redeploys automatically.

Booking requests show up in the Netlify dashboard under **Forms → booking**.

## AI chat setup

The chat needs an Anthropic API key:

1. Create a key at https://platform.claude.com (API keys).
2. In Netlify: **Project configuration → Environment variables → Add a variable**.
   Key: `ANTHROPIC_API_KEY`, value: your key. Mark it as secret.
3. Redeploy (**Deploys → Trigger deploy**).

Without the key the chat still opens but replies with the shop's phone number.

The bot's knowledge (hours, services, warranty, rules) is the `SYSTEM_PROMPT` in `netlify/functions/chat.mjs`. Update it whenever business details change.

## Editing text

All visible text lives in `public/script.js` under `T.en` (English) and `T.tl` (Tagalog). English is also in `public/index.html` as the default.
