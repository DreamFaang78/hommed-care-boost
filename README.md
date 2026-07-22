# Hommed Landing Page

A standalone Vite + TanStack Start landing page for Dr. Iqbal's Hommed Homoeopathic Centre.

## Architecture

```
hommed-landing/        ← THIS REPO (Landing Page — Vite + TanStack)
  └── src/routes/index.tsx   ← Form POSTs to Hommed CRM backend

Hommed CRM (separate)  ← Backend / Dashboard (Next.js)
  └── /api/leads             ← Receives form data → Supabase
```

The landing page **never touches Supabase directly**. It sends leads via HTTP POST to the CRM backend, which writes them to Supabase and notifies the team via Telegram.

## Local Development

### 1. Set the backend URL
The `.env.local` file already points to the local CRM:
```
VITE_API_BASE_URL=http://localhost:3000
```

### 2. Start both servers
```bash
# Terminal 1 — CRM dashboard (in the Iqbal website folder)
cd "c:\Agam Singh\Iqbal website"
npm run dev

# Terminal 2 — Landing page (this folder)
cd "c:\Agam Singh\hommed-landing"
npm install
npm run dev
```

Landing page will be at: **http://localhost:5173**
CRM backend will be at: **http://localhost:3000**

## Production Deployment

### Landing Page
Update `.env.production` with your live CRM URL, then deploy the Vite build to any static host (Vercel, Netlify, Cloudflare Pages, etc.):
```bash
npm run build
# Deploy the .output/ or dist/ folder
```

### Required Environment Variables (production)
| Variable | Example |
|---|---|
| `VITE_API_BASE_URL` | `https://hommed.in` |

## What was changed from the original repo

Only **one function** in `src/routes/index.tsx` was changed — the `LeadForm.onSubmit` handler, which previously had a fake `setTimeout` stub. It now does a real `fetch` POST to `${VITE_API_BASE_URL}/api/leads`.

No UI, styling, or other logic was changed.
