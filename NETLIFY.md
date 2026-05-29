# Deploying Sree Recliners and Sofas on Netlify

Customer order and quote requests from the contact form are stored as **Netlify Forms** submissions. No database or API keys are required for basic form storage.

## Deploy the site

### Option A — GitHub (recommended)

1. Push this repo to GitHub.
2. In [Netlify](https://app.netlify.com/), choose **Add new site** → **Import an existing project**.
3. Connect the repository. Netlify reads `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (handled by `@netlify/plugin-nextjs`)
4. Deploy. After the first successful deploy, Netlify scans `public/forms.html` and registers the **contact** form.

### Option B — Netlify CLI

```bash
npm install
npx netlify login          # opens browser; authorize the CLI
npx netlify init           # link this folder to a new or existing site
npx netlify deploy --build # draft deploy (build + upload)
npx netlify deploy --prod  # production deploy after you verify the draft URL
```

One-shot production deploy (after login + init):

```bash
npx netlify deploy --build --prod
```

**Not logged in?** Run `npx netlify login` in this project directory. When the browser opens, sign in to Netlify and approve access. Then run `npx netlify status` — you should see your linked site name, not “Not logged in”.

Forms only work on a **deployed** Netlify site (or with `netlify dev`). Plain `npm run dev` does not process form submissions.

## View customer orders / quotes

1. Open [Netlify Dashboard](https://app.netlify.com/).
2. Select your site.
3. Go to **Forms** in the left sidebar.
4. Open the **contact** form to see submissions (name, phone, email, order type, quantity, dimensions, fabric, delivery, message, etc.).

You can export submissions as CSV from the form detail page.

## Email notifications on new submissions

1. In the site dashboard, go to **Forms** → **Form notifications** (or **Site configuration** → **Forms** → **Form notifications**).
2. Click **Add notification** → **Email notification**.
3. Choose the **contact** form and enter the email address(es) to notify.
4. Save. Netlify sends an email for each new submission (plan limits apply; see [Netlify Forms pricing](https://www.netlify.com/products/forms/)).

## Environment variables

None are required for Netlify Forms on this site. Add variables later only if you integrate other services (analytics, CMS, etc.). Do not commit `.env` files or API tokens.

## How the form works

- `public/forms.html` — hidden static HTML so Netlify detects fields at build time (required for Next.js).
- `src/components/ContactForm.tsx` — POSTs `application/x-www-form-urlencoded` to `/` with `form-name=contact`, `data-netlify="true"`, and honeypot `bot-field`.
- Spam: leave the honeypot field empty.

Captured fields include **name**, **phone**, **email**, **order type** (product), **quantity**, **message**, plus optional recliner type, dimensions, fabric, and delivery location.

## Local development

- `npm run dev` — UI works; form POST to `/` will not persist (expected).
- `npx netlify dev` — proxies the site and processes real form submissions against your linked Netlify site (use before production).
