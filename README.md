# Telio Software & Co. website

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion.

## Run
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run typecheck && npm run build
```
## Before launch
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_PROJECT_FORM_URL`.
- Optionally set `NEXT_PUBLIC_CONTACT_EMAIL` for privacy-policy requests.
- Review the `/privacy` page against your actual practices.
- Run Lighthouse on a production build (targets: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms).

## Structure
`src/app` routes · `src/components/{layout,sections,motion,ui}` · `src/lib/site.ts` · design tokens in `src/app/globals.css`.
# telio-software
