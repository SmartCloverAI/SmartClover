---
name: public-api
description: Use SmartClover's public website APIs for service status, runtime host inspection, markdown negotiation, and structured contact intake.
---

# SmartClover Public API Skill

Use this skill when an agent needs to interact with SmartClover's public website APIs instead of scraping the rendered pages.

## Available endpoints

- `GET https://smartclover.ro/api/status`
  Returns a simple health payload with `status`, `service`, `version`, `checkedAt`, and the list of public endpoints.

- `GET https://smartclover.ro/api/host-id`
  Returns the current runtime host label shown in the website footer as `{ "hostId": "..." }`.

- `POST https://smartclover.ro/api/contact`
  Submits the same structured inquiry payload used by the public contact form.

## Contact API rules

- Provide a human-meaningful inquiry payload.
- Leave the honeypot field `website` empty.
- Set `consentAccepted` to `true` only when the user has explicitly consented to SmartClover using the submitted information for reply and routing.
- Treat `mailtoUrl` as an optional manual fallback if the site reports `relayStatus: "manual"`.

## Markdown negotiation

- For HTML pages on `smartclover.ro`, request `Accept: text/markdown` to receive a markdown representation.
- Expect `Content-Type: text/markdown` and an `x-markdown-tokens` response header.
