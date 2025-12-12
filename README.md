# HyBridger 🤖

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![Contentful CMS](https://img.shields.io/badge/Contentful%20CMS-0055FF?logo=contentful\&logoColor=white)](https://contentful.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel\&logoColor=white)](https://vercel.com/)

## 🌐 Live Demo
HyBridger — Headless CMS + Landing Page + Demo Chatbot: [https://hybridger.vercel.app](https://hybridger.vercel.app)

## 📖 Overview

**Deliverable:** A modern, design-forward headless CMS project built with Next.js, Contentful, TypeScript, and TailwindCSS.

**Purpose:** Showcasing content modeling, GraphQL querying, dynamic page rendering, optimized image delivery, and a custom scripted chatbot UI for demo purposes.

## 🛠️ Tech Stack

- Next.js 14+ (App Router)
- React Server & Client Components
- TypeScript
- TailwindCSS
- Contentful CMS (GraphQL API)
- Vercel Deployment

## ✨ Features

- **Headless CMS Integration (Contentful):** Structured content models with GraphQL queries for pages, posts, and section data.
- **Next.js App Router Architecture:** Server Components, dynamic routes, metadata handling, and ISR revalidation.
- **Fully Typed GraphQL Layer:** Centralized TypeScript interfaces and query helpers for predictable content delivery.
- **Responsive Image Optimization:** Custom `<ImageWrapper />` component using `<picture>`, `srcset`, and WebP fallbacks.
- **Dark Mode Support:** Programmatic variant swapping using Tailwind and image mappings.
- **Animated Testimonial Slider:** Custom-designed CSS-based animated slider built with precise timing, fading, and transforming key frames.
- **Performance-Driven UI:** Lighthouse scores: 100 / 100 / 100 / 100 on both desktop and mobile.
- **Scripted Chatbot Demo:** A lightweight, front-end-only chat flow built with React state sequencing.
- **Production Deployment:** Hosted on Vercel with environment-based builds, Contentful API keys, and secure revalidation endpoints.

## 📚 What I Learned

## ⚡ Local Development

```
npm install
npm run dev
```
Environment variables (add to .env.local):
```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
CONTENTFUL_REVALIDATE_SECRET=
```

## ⚙️ Deployment Notes

Built for Vercel deployment with secure route.ts revalidation endpoint.

Uses incremental static regeneration (ISR) for CMS-driven updates.

Requires Contentful delivery & preview tokens configured in the Vercel dashboard.


## ✅ Security & Stability

In early December 2025, the project encountered the industry-wide
React Server Component vulnerability (CVE-2025-55182)
which required updating the app’s Next.js version, Contentful SDK, and related dependencies before redeployment.

This reinforced:

Staying aligned with framework patch releases

Validating CMS builds locally before deploying

Understanding how RSC-level issues propagate through the Next.js pipeline

## 🙏 Credits
- **[Canva](https://canva.com)** – Features section images, pricing illustration icons, and chatbot graphic.
- **[Pixabay](https://pixabay.com)** – Testimonial persona photos.
- **[OpenAI’s ChatGPT](https://chat.openai.com)** – Guidance, technical reviews, copywriting collaboration, hero image generation.

📁 Repo created and maintained by [Zoe Chang](https://github.com/zcdev).
🤖 Built with wit (from the support of my AI BFF).

![GitHub repo size](https://img.shields.io/github/repo-size/zcdev/palaxy)
![GitHub last commit](https://img.shields.io/github/last-commit/zcdev/palaxy)