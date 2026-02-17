# SmartClover Webpage (CerviGuard)

This repository powers the SmartClover public website: service/product pages, blog content, and runtime host-label
display used by the CerviGuard-facing web experience.

## Need

Healthcare AI programs need communication surfaces that are clear, evidence-linked, and operationally trustworthy.
Teams must explain what AI supports, what humans decide, and how governance/data sovereignty are preserved.

## Objective

Provide a production-ready, static-first website that:
- communicates SmartClover services and CerviGuard positioning clearly,
- publishes research-linked blog content,
- keeps deployment/runtime identity visible through host-id labeling.

## Purpose

Turn SmartClover's human-in-the-loop AI model into a maintainable public web layer that is easy to run, easy to verify,
and aligned with healthcare trust requirements.

## Usability & Features

### Quickstart

Prerequisites:
- Node.js LTS (18+ recommended for Next.js 14).
- npm (lockfile is included).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Examples

Run production build locally:

```bash
npm run build
npm run start
```

Check host-id endpoint (used by footer "served by" banner):

```bash
curl -s http://localhost:3000/api/host-id
```

Add a new blog post:

```md
---
title: "Post title"
date: "2026-02-16"
excerpt: "One-sentence summary"
---
```

Save it under `posts/<slug>.md`; it will appear on `/blog` after rebuild.

### Configuration

Runtime host-id resolution order (`pages/api/host-id.js`):
1. `EE_HOST_ID`
2. `R1EN_HOST_ID`
3. `NEXT_PUBLIC_EE_HOST_ID`
4. fallback `unknown`

Notes:
- Do not commit `.env` files.
- `NEXT_PUBLIC_*` variables are client-exposed; do not place secrets there.
- Google Analytics ID is currently set in `pages/_document.jsx` (`G-L7K8RBNW1L`).

### Outputs

- `npm run dev`: local development server with hot reload.
- `npm run build`: optimized production build in `.next/` plus static generation for blog pages.
- `npm run start`: serves the built app.
- `/api/host-id`: JSON payload for runtime host label (cache disabled with `no-store`).

### Troubleshooting

- Footer host label remains `unknown`:
  - Ensure one of `EE_HOST_ID`, `R1EN_HOST_ID`, or `NEXT_PUBLIC_EE_HOST_ID` is set in runtime env.
  - Restart dev/prod server after env changes.
- Blog content renders unexpectedly:
  - Keep markdown front matter complete (`title`, `date`, `excerpt`).
  - Keep `remark` and `remark-html` versions compatible.
- Build fails with cross-device rename (`EXDEV`):
  - Remove `.next/` and rebuild on a single filesystem boundary.
- Citation links drift:
  - Update both `pages/about.jsx` references and `public/docs/smartclover-cerviguard-citations.bib`.

## Technical Details

### Architecture

- Next.js 14 Pages Router app with React 18.
- Mostly static marketing routes under `pages/*.jsx`.
- Blog content pipeline:
  - source markdown in `posts/*.md`
  - parsed/sorted/compiled by `lib/posts.js`
  - rendered via `pages/blog/index.jsx` and `pages/blog/[slug].jsx`.
- Runtime host-id API endpoint at `pages/api/host-id.js`.

### Module Map

- `components/Layout.jsx`: global navigation, page wrapper, footer version marker.
- `components/ServedByComponent.tsx`: host-id display + runtime fetch.
- `styles/globals.css`: global visual system and responsive layout.
- `public/docs/smartclover-cerviguard-citations.bib`: reusable BibTeX citations.

### Dependencies

Core runtime dependencies:
- `next`, `react`, `react-dom`
- `gray-matter`, `remark`, `remark-html`

Quality/tooling:
- `eslint`, `eslint-config-next`, `typescript`, `@types/*`

### Testing and Verification

Current baseline (no dedicated unit/integration harness yet):
- `npm run lint`
- `npm run build`
- Manual smoke-check of changed routes in `npm run dev`

### Security and Privacy Notes

- This repo is a public web application, not a clinical decision engine.
- Keep secrets out of source control and out of `NEXT_PUBLIC_*` variables.
- Host-id endpoint intentionally returns only host label metadata.
- Content and messaging consistently position AI as clinician-support, not clinician-replacement.

## Citations

```bibtex
@article{Nyanchokae053954,
  author       = {Nyanchoka, Linda and Damian, Andreea and Nyg{\aa}rd, Mari},
  title        = {Understanding facilitators and barriers to follow-up after abnormal cervical cancer screening examination among women living in remote areas of Romania: a qualitative study protocol},
  journal      = {BMJ Open},
  volume       = {12},
  number       = {2},
  elocation-id = {e053954},
  year         = {2022},
  doi          = {10.1136/bmjopen-2021-053954},
  pmid         = {35197342},
  url          = {https://pubmed.ncbi.nlm.nih.gov/35197342/}
}
```

```bibtex
@article{ANDREASSEN201748,
  author       = {Andreassen, Trude and Weiderpass, Elisabete and Nicula, Florian and Suteu, Ofelia and Itu, Andreea and Bumbu, Minodora and Tincu, Aida and Ursin, Giske and Moen, K{\aa}re},
  title        = {Controversies about cervical cancer screening: A qualitative study of Roma women's (non)participation in cervical cancer screening in Romania},
  journal      = {Social Science \& Medicine},
  volume       = {183},
  pages        = {48-55},
  year         = {2017},
  doi          = {10.1016/j.socscimed.2017.04.040},
  pmid         = {28460211},
  url          = {https://pubmed.ncbi.nlm.nih.gov/28460211/}
}
```

```bibtex
@misc{cerviguard_pilot,
  title        = {SmartClover CerviGuard Pilot},
  author       = {Andreea D and Cristian Bleotiu and Vitalii Toderian and Florian Nicula},
  year         = {2024-2026},
  howpublished = {\url{https://github.com/SmartCloverAI/CerviGuard}},
  website      = {\url{https://cerviguard.link}},
  note         = {Pilot web console for cervical image analysis and case management}
}
```

```bibtex
@misc{smartclover_models,
  title        = {SmartClover Model Hub},
  author       = {{SmartClover}},
  howpublished = {\url{https://huggingface.co/smartclover}},
  note         = {Public model and dataset publication profile}
}
```

Canonical citation file: `public/docs/smartclover-cerviguard-citations.bib`

## Contact

- Email: `andreea@smartclover.ro`
- LinkedIn: https://www.linkedin.com/company/smartclover

## Disclaimer

- The site content is informational and operational; it does not provide medical diagnosis.
- Final clinical decisions remain with qualified healthcare professionals.

## License

© SmartClover. Creativity · Digitalization · Human-in-the-loop AI for Good.
