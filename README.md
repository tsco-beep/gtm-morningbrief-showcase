# GTM Agent Library — showcase site

A single web page showcasing your agent library, with the Morning Brief as the featured deep-dive. This folder contains everything Railway needs to host it and give you a live, shareable link.

## What's in here

| File | What it is (plain English) |
|---|---|
| `public/index.html` | The actual page — all the design and content live here. This is the thing people see. |
| `server.js` | A tiny program whose only job is to show that page on the internet. |
| `package.json` | A checklist Railway reads to know how to start the site. |
| `.gitignore` | Tells Git to ignore temporary files. You can ignore this file. |

You don't need to understand the code. The only file with "content" you might ever edit is `public/index.html`.

---

## How to put it online with Railway

Railway is a hosting service: you give it these files, it runs them, and it hands you back a public web link. There are two ways. **Option A (GitHub) is the most reliable and needs no command line.**

### Option A — via GitHub (recommended, no terminal)

1. **Make a free GitHub account** at github.com if you don't have one.
2. **Create a new repository** (click the "+" top-right → *New repository*). Name it something like `gtm-agent-showcase`. Leave it Public or Private — both work.
3. **Upload these files.** On the new repo page, click *uploading an existing file*, then drag in everything from this `Morning-Brief-Showcase` folder — including the `public` folder. Click *Commit changes*.
4. **Go to railway.app** and sign in with GitHub (free to start).
5. Click **New Project → Deploy from GitHub repo**, and pick the repo you just made.
6. Railway reads `package.json`, installs what it needs, and starts the site automatically. Wait ~1 minute.
7. In your project, open **Settings → Networking → Generate Domain**. Railway gives you a public link like `gtm-agent-showcase.up.railway.app`. **That's your live URL** — share it, put it in interviews.

To change the page later, edit `public/index.html` on GitHub (or re-upload it). Railway redeploys automatically.

### Option B — via Railway's command line (if you prefer)

1. Install the Railway CLI (one-time): in a terminal, run `npm i -g @railway/cli`.
2. From inside this folder, run `railway login`, then `railway init`, then `railway up`.
3. Run `railway domain` to get your public link.

---

## Want to preview it on your own computer first?

If you have Node installed: open a terminal in this folder and run `npm install` then `npm start`, then visit `http://localhost:3000`. (Optional — not required for hosting.)

The simplest preview of all: just double-click `public/index.html` to open it in your browser. It won't be "online," but you'll see exactly what the page looks like.
