---
sidebar_position: 3
---

# Prompts as Code

Agent Mantis treats test instructions as a form of code — version-controlled, reviewable, and composable.

## The idea

Instead of writing Playwright scripts:

```typescript
await page.goto('https://myapp.com');
await page.fill('[data-testid="email"]', 'user@test.com');
await page.click('[data-testid="submit"]');
await expect(page.locator('h1')).toHaveText('Welcome');
```

You write:

```
Go to https://myapp.com
Enter "user@test.com" in the email field
Click Submit
Verify the heading says "Welcome"
```

## Benefits

- **Readable by anyone** — QA, PMs, developers
- **Faster to write** — No boilerplate
- **Self-healing** — Agent Mantis adapts when selectors break
- **Version-controlled** — Store workflows alongside your code

