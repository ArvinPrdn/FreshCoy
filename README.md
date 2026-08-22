# Freshcoy Package

Website showcase / interactive prototype for Freshcoy Package.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide React
- Vercel-ready API route

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## API

`GET /api/freshness` returns the indicator stages and the safety disclaimer used by the app. It is implemented as a Next.js route handler, so it deploys as a Vercel serverless function.

## Deployment

Push the project to GitHub and import the repository into Vercel. No database or custom server is required for the current prototype.

## Design notes

The interface intentionally avoids the usual AI-generated patterns: excessive gradients, every-section cards, fake metrics, fake testimonials, and oversized SaaS language. The core experience is built around the interactive indicator and the chemistry explanation.


## Added content

The existing interface remains intact while the page now includes:
- clearer 01–04 indicator usage flow
- storage-change timeline without invented shelf-life data
- Freshcoy research process
- experiment-results placeholder table (no fabricated data)
- "Apa yang diamati?" explanation
- Freshcoy components and benefits
- project identity / references placeholders
- richer QR companion modal
- a preservation note that indicator color is not a standalone food-safety decision

Research data placeholders are intentionally left explicit until the team's real experimental results are available.
