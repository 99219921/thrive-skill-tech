# Thrive Skill Tech

Production-style ed-tech website built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Included

- Public website pages
- Student dashboard
- Admin dashboard
- Multilingual toggle (English / Hindi / Marathi)
- Mock data and API placeholders
- Razorpay integration placeholders
- Responsive dark premium UI

## Important integration points

- `app/api/checkout/route.ts` for Razorpay order creation
- `app/api/razorpay/webhook/route.ts` for signature verification
- `app/api/webinar-leads/route.ts` for webinar lead storage
- `app/api/contact/route.ts` for contact form handling
- `components/forms/auth-form.tsx` for auth wiring
