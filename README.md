# Telio Software & Co. website

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion.

## Run
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run typecheck && npm run build
```
Without email/Turnstile keys the form works in development (messages are logged to the console) and **fails closed in production**.

## Before launch
- Set `NEXT_PUBLIC_SITE_URL`, contact email, Resend + Turnstile keys.
- Swap the in-memory rate limiter (`lib/security/rate-limit.ts`) for a persistent one on serverless hosting.
- Review the draft `/privacy` page.
- Run Lighthouse on a production build (targets: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms).

## Structure
`src/app` routes + server action · `src/components/{layout,sections,motion,ui}` · `src/lib/{validation,security,email,site}` · design tokens in `src/app/globals.css`.
# telio-software
