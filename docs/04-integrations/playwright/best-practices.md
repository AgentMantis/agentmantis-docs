---
sidebar_position: 2
---

# Playwright Best Practices

Tips for getting the most out of Agent Mantis's Playwright foundation.

## Use stable selectors

Prefer selectors based on:
- `data-testid` attributes
- ARIA roles and labels
- Text content

Avoid selectors based on:
- CSS class names (change frequently)
- DOM structure (brittle)
- Auto-generated IDs

## Keep tests independent

Each workflow should:
- Start from a clean state
- Not depend on other workflows
- Clean up after itself when possible

## Handle dynamic content

- Use assertions to wait for content to appear
- Avoid fixed delays (`sleep`) — rely on auto-waiting
- Account for loading spinners and skeleton screens

