# Hommed Landing Page

A modern, high-performance standalone landing page for Dr. Iqbal's Hommed Homoeopathic Centre, built with Vite and TanStack Start. 

This project serves as the front-facing website designed to capture leads, and seamlessly integrates with a separate CRM backend to manage the incoming data.

---

## 🚀 Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) & [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## 🏗️ Architecture & Data Flow

The landing page **never touches Supabase directly**. It captures user data and sends leads via an HTTP POST request to the CRM backend. The CRM backend is then responsible for writing the data to Supabase and triggering notifications (e.g., Telegram).

```text
hommed-landing/        ← THIS REPO (Landing Page — Vite + TanStack)
  └── src/routes/index.tsx   ← Form POSTs to Hommed CRM backend

Hommed CRM (separate)  ← Backend / Dashboard (Next.js)
  └── /api/leads             ← Receives form data → Supabase
```

---

## 📂 Project Structure

- `src/assets/` - Static assets like images and icons.
- `src/components/` - Reusable UI components (buttons, forms, Radix primitives).
- `src/hooks/` - Custom React hooks.
- `src/lib/` - Utility functions and helpers.
- `src/routes/` - TanStack Router page definitions. `index.tsx` contains the main landing page and lead form logic.
- `src/styles.css` - Global Tailwind and custom CSS.

---

## 💻 Local Development

### 1. Set the backend URL
Ensure the `.env.local` file points to your local CRM instance:
```env
VITE_API_BASE_URL=http://localhost:3000
```

### 2. Start both servers

To test the full flow (Landing Page -> CRM), you'll need both projects running.

**Terminal 1 — CRM backend (Next.js):**
```bash
cd "c:\Agam Singh\Iqbal website"
npm run dev
```
*(CRM backend will be at: **http://localhost:3000**)*

**Terminal 2 — Landing page (This repo):**
```bash
cd "c:\Agam Singh\hommed-landing"
npm install
npm run dev
```
*(Landing page will be at: **http://localhost:5173**)*

---

## 🌐 Production Deployment

### Building the Landing Page
Before deploying, make sure to update your `.env.production` file with your live CRM URL. Then build the Vite project:

```bash
npm run build
```
You can deploy the resulting `.output/` or `dist/` folder to any static hosting provider like Vercel, Netlify, or Cloudflare Pages.

### Required Environment Variables (Production)

| Variable | Example | Description |
|---|---|---|
| `VITE_API_BASE_URL` | `https://hommed.in` | The production URL of the Hommed CRM backend |

---

## 🔄 Notes on Customization

**Important Change from Original Scaffold:**
Only **one function** in `src/routes/index.tsx` was changed from the base template — the `LeadForm.onSubmit` handler. It previously had a mock `setTimeout` stub but now performs a real `fetch` POST to `${VITE_API_BASE_URL}/api/leads`.

No other UI, styling, or logic was altered to ensure seamless compatibility with the original design.

---

> **Note:** This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history (force pushing, rebasing, amending, or squashing commits that are already pushed) as it rewrites history on Lovable's side and you may lose project history. Commits you push will sync back to Lovable and show up in the editor.
