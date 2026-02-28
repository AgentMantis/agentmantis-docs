---
sidebar_position: 4
---

# Selectors and Resilience

How Agent Mantis finds elements on the page and adapts when they change.

## Selector strategy

Agent Mantis uses a multi-layered approach:

1. **Semantic understanding** — AI interprets the intent ("the login button")
2. **Best selector** — Picks the most stable selector available
3. **Fallback chain** — If the primary selector fails, tries alternatives
4. **Self-healing** — Updates selectors based on page analysis

## Selector priority

1. `data-testid` attributes (most stable)
2. ARIA roles and labels
3. Text content
4. CSS selectors
5. XPath (last resort)

## Recording vs resilient automation

Traditional record-and-playback tools capture exact selectors at recording time. When the UI changes, tests break.

Agent Mantis uses AI to understand *intent*, not just selectors. This means tests survive UI refactors that would break traditional tools.

