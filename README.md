# CerviGuard

CerviGuard is SmartClover's human-in-the-loop AI initiative focused on cervical cancer prevention, follow-up, and
evidence-linked clinical collaboration. This repository powers the public web experience and service communication layer.

## Need

Healthcare teams managing cervical cancer prevention face fragmented data, delayed follow-up, and high documentation
burden. Programs need faster insight without sacrificing clinical safety, privacy, or traceability.

## Objective

Deliver a trustworthy AI-supported service model that helps teams:
- identify risk and follow-up gaps earlier,
- keep clinicians in final control of decisions,
- preserve data sovereignty under "your AI, your Data" principles.

## Purpose

CerviGuard exists to improve prevention outcomes through practical, governed AI workflows that combine quantitative
signals, qualitative evidence, and transparent human oversight.

## Usability & Features

### Who It Serves
- Clinicians and care coordinators monitoring screening and follow-up pathways.
- Program leaders who need explainable metrics and operational visibility.
- Security and governance stakeholders requiring auditable, sovereign deployment models.

### Core Capabilities
- Evidence-linked insight communication: every key claim can be tied back to source context.
- Human-in-the-loop workflow design: AI supports decisions, clinicians retain authority.
- Prevention-focused service narrative: content emphasizes early detection and follow-up reliability.
- Sovereign deployment positioning: "your AI, your Data", "your App, your Data", and "your Ai, your eSource".
- Blog-driven knowledge publishing for research and operational updates.

### UX Principles
- Clear language for non-technical healthcare stakeholders.
- Structured page hierarchy for quick scanning on desktop and mobile.
- Consistent call-to-action paths for discovery, contact, and service exploration.

## Technical Overview

### Stack
- Next.js 14 (Pages Router) + React 18.
- Markdown content pipeline via `gray-matter` + `remark` + `remark-html`.
- Global styling in `styles/globals.css`.

### Architecture
- `pages/`: static marketing and information routes.
- `pages/blog/`: statically generated blog index and per-post pages.
- `lib/posts.js`: markdown loading, parsing, sorting, HTML transformation.
- `components/Layout.jsx`: shared navigation/footer and manual version marker.
- `components/ServedByComponent.tsx`: edge host identity banner.

### Environment Variables
- `EE_HOST_ID` or `NEXT_PUBLIC_EE_HOST_ID` for host identity display.
- Do not commit `.env` files.

### Development Commands
```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

### Quality Baseline
- Lint must pass: `npm run lint`.
- Production build must pass: `npm run build`.
- Manual smoke checks in `npm run dev`, especially after content or navigation edits.

### Deployment

The app is designed for static-first delivery and can be deployed through an edge pipeline that runs:

```bash
npm install
npm run build
npm run start
```

## License

© SmartClover. Creativity · Digitalization · Human-in-the-loop AI for Good.
