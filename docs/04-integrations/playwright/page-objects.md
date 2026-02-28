---
sidebar_position: 3
---

# Page Objects

<!-- TODO: Document how Agent Mantis relates to the page object pattern -->

How Agent Mantis's approach compares to traditional page object models.

## Traditional page objects

In standard Playwright tests, page objects encapsulate selectors and actions for a page:

```typescript
class LoginPage {
  constructor(private page: Page) {}
  
  async login(username: string, password: string) {
    await this.page.fill('[data-testid="username"]', username);
    await this.page.fill('[data-testid="password"]', password);
    await this.page.click('[data-testid="submit"]');
  }
}
```

## Agent Mantis approach

Agent Mantis replaces page objects with natural-language workflows and self-healing selectors, reducing maintenance overhead while keeping tests readable.

