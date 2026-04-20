---
name: public-api
description: Use SmartClover's public website APIs, llms artifacts, and read-only MCP endpoint instead of scraping rendered pages when machine-readable public data is available.
---

# SmartClover Public API Skill

Use this skill when an agent needs to interact with SmartClover's public machine-readable surfaces instead of scraping the rendered pages.

## Available endpoints

- `POST https://smartclover.ro/mcp`
  Read-only Streamable HTTP MCP endpoint for SmartClover public company facts, product summaries, trust artifacts, and qualification routes.

- `GET https://smartclover.ro/api/status`
  Returns a simple health payload with `status`, `service`, `version`, `checkedAt`, and the list of public endpoints.

- `GET https://smartclover.ro/api/host-id`
  Returns the current runtime host label shown in the website footer as `{ "hostId": "..." }`.

- `POST https://smartclover.ro/api/contact`
  Submits the same structured inquiry payload used by the public contact form.

- `GET https://smartclover.ro/.well-known/mcp/server-card.json`
  Returns the discovery metadata published for the live read-only MCP server.

- `GET https://smartclover.ro/llms.txt`
  Returns a concise plain-text map of SmartClover public routes, artifacts, and agent-facing entry points.

- `GET https://smartclover.ro/llms-full.txt`
  Returns an extended plain-text map with compact summaries of public SmartClover materials.

## Contact API rules

- Provide a human-meaningful inquiry payload.
- Leave the honeypot field `website` empty.
- Set `consentAccepted` to `true` only when the user has explicitly consented to SmartClover using the submitted information for reply and routing.
- Treat `mailtoUrl` as an optional manual fallback if the site reports `relayStatus: "manual"`.

## Markdown negotiation

- For HTML pages on `smartclover.ro`, request `Accept: text/markdown` to receive a markdown representation.
- Expect `Content-Type: text/markdown` and an `x-markdown-tokens` response header.
