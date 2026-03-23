# HyBridger 🤖

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![Contentful CMS](https://img.shields.io/badge/Contentful%20CMS-0055FF?logo=contentful\&logoColor=white)](https://contentful.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel\&logoColor=white)](https://vercel.com/)

## Live Demo
HyBridger — Headless CMS + Landing Page + Demo Chatbot: [https://hybridger.vercel.app](https://hybridger.vercel.app)

## Overview

**Deliverable:** A modern, design-forward headless CMS project built with Next.js, Contentful, TypeScript, and Tailwind CSS.

**Purpose:** Showcasing content modeling, GraphQL querying, dynamic page rendering, optimized image delivery, and a custom scripted chatbot UI for demo purposes.

## Tech Stack

- Next.js 15+ (App Router)
- React Server & Client Components
- TypeScript
- Tailwind CSS
- Contentful CMS (GraphQL API)
- Vercel Deployment

## Features

**Headless CMS Integration (Contentful):**<br />
Structured content models with GraphQL queries for pages, posts, and section data.

**Next.js App Router Architecture:**<br />
Server Components, dynamic routes, metadata handling, and ISR revalidation.

**Fully Typed GraphQL Layer:**<br />
Centralized TypeScript interfaces and query helpers for predictable content delivery.

**Responsive Image Optimization:**<br />
Custom `<ImageWrapper />` component using `<picture>`, `srcset`, and WebP fallbacks.

**Dark Mode Support:**<br />
Programmatic variant swapping using Tailwind and image mappings.

**Animated Testimonial Slider:**<br />
Custom-designed CSS-based animated slider built with precise timing, fading, and transforming key frames.

**Performance-Driven UI:**<br />
Lighthouse scores: 100 / 100 / 100 / 100 on both desktop and mobile.

**Scripted Chatbot Demo:**<br />
A lightweight, front-end-only chat flow built with React state sequencing.

**Production Deployment:**<br />
Hosted on Vercel with environment-based builds, Contentful API keys, and secure revalidation endpoints.

## Local Development

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

## Notes

Built for Vercel deployment with secure route.ts revalidation endpoint.

Uses incremental static regeneration (ISR) for CMS-driven updates.

Requires Contentful delivery & preview tokens configured in the Vercel dashboard.

Detailed breakdown:
https://zoechang.dev/blog/what-i-learned-from-building-hybridger

## Assets
- **[Canva](https://canva.com)** – Features section images, pricing illustration icons, and chatbot graphic.
- **[Pixabay](https://pixabay.com)** – Testimonial persona photos.

![GitHub repo size](https://img.shields.io/github/repo-size/zcdev/hybridger)
![GitHub last commit](https://img.shields.io/github/last-commit/zcdev/hybridger)