---
title: "Deploying with Ratio1's Worker App Runner"
date: "2025-04-18"
excerpt: "A look at how SmartClover ships Next.js applications to a decentralised edge network in a single pipeline."
---

Ratio1’s Worker App Runner turns Git repositories into running applications without bespoke DevOps scripts. The service clones your repo, installs dependencies, builds the project, and launches it across a blockchain-governed network of edge nodes. Their launch post, [Introducing the Worker App Runner: Deploy from Git to Edge](https://ratio1.ai/blog/introducing-the-worker-app-runner-deploy-from-git-to-edge), walks through how continuous delivery hooks straight into Ratio1’s decentralized control plane.
</br></br>
For SmartClover, that means our healthcare analytics portals and cybersecurity dashboards run close to the users who need them, with reliability that comes from decentralisation rather than a single region. Updates are as simple as pushing new code and triggering the Worker job-Ratio1 handles container orchestration, tunnels, and observability.
</br></br>
To make that possible, SmartClover and Ratio1 formalised a partnership that aligns product roadmaps. We bring regulated-sector requirements for auditable AI workloads; Ratio1 contributes a hardened edge network with per-tenant isolation and programmable data residency. Shared sprints cover everything from privacy-preserving build pipelines to deterministic rollbacks, so every deployment satisfies healthcare compliance without slowing our shipping cadence.
</br></br>
This deployment model aligns with our values: keep control with the creators, protect sensitive data, and ensure critical services stay online even if one node fails. As the partnership matures, we are co-developing governance tooling to expose cryptographic attestations and consent-aware routing directly inside our clinician dashboards. It is the infrastructure foundation for our next generation of human-centred AI experiences.
