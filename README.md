# Nursing Workflow Tools

A concise meeting portfolio for six nursing-school workflow tools. Each project
shows the problem, the tool, and a direct link.

## The story

1. Opening — four concise workflow goals
2. Tools — six direct problem-and-tool views
3. Demo — a short fictional-data organizer

The clinical demonstration is fictional and contains no protected health
information. The product descriptions are grounded in the linked repositories
and local project history.

## Run locally

Requires Node.js 22.13 or newer.

    npm install
    npm run dev

Then open the local address printed in the terminal.

## Validate

    npm run build
    node --test tests/rendered-html.test.mjs

## Main files

- app/page.tsx — portfolio sections and the short demonstration
- app/globals.css — responsive visual design

## Content notes

- Concept Map and Critical Points focus on saving document-formatting time.
- Brightspace Sync focuses on collecting and organizing course information.
- Pediatrics Guide and Fox Timer support study structure and focus.
