# SmartClover Website

A modern, minimalist multi-page website for SmartClover built with Next.js. The site highlights our healthcare AI
research, AI-augmented cybersecurity services, decentralised deployments on Ratio1, and creative EQ products for
children. All content is statically generated-no Firebase dependencies.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. Pages are generated statically with Next.js so they are fast, secure, and
ready for deployment to Ratio1’s Worker App Runner.

## Available Scripts

- `npm run dev` – start the development server
- `npm run build` – generate the production build
- `npm run start` – run the production build locally
- `npm run lint` – run ESLint using Next.js defaults

## Project Structure

```
.
├── components/          # Shared layout components (navigation, footer)
├── lib/                 # Blog utilities for markdown posts
├── pages/               # Next.js pages (Home, About, Products, Services, etc.)
├── pages/blog/          # Blog index and dynamic post routes
├── posts/               # Markdown blog posts with frontmatter
├── public/              # Static assets (SmartClover logo)
└── styles/              # Global styling with a minimalist, one-column layout
```

## Content Management

Blog posts live in the `posts/` directory as Markdown files with frontmatter (`title`, `date`, `excerpt`). Next.js uses
static generation to turn each post into a page, so publishing an update is as simple as committing a new file.

## Deployment

The project is optimised for deployment on Ratio1’s Worker App Runner. Configure the job with commands such as:

```bash
npm install
npm run build
npm run start
```

Ratio1 clones the repository, runs these commands, and launches the app across its decentralised edge network.

## License

© 2024 SmartClover. Creativity · Digitalization · Human-in-the-loop AI for Good.
