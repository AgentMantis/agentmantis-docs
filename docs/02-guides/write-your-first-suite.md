---
sidebar_position: 2
---

# E2E Test Rules

> Read this page in full before writing any test code.
> These rules apply to all E2E tests regardless of UI framework.

## Technology Stack

| Tool | Purpose |
|------|---------|
| **Playwright** | Browser automation & test runner |
| **TypeScript** | All test code must be TypeScript |

Adapt selectors and shared helpers to whatever UI framework the project uses (React, Vue, Angular, Svelte, etc.). The architecture rules below apply regardless.

---

## Project Configuration — Browsers × Test Suites

The Playwright config (`e2e/playwright.config.ts`) defines projects using a **browser × suite** naming convention: `{browser}:{suite}`.

### Available Browsers

| Project prefix | Device profile | Engine |
|----------------|---------------|--------|
| `chromium` | Desktop Chrome | Chromium |
| `firefox` | Desktop Firefox | Firefox |
| `webkit` | Desktop Safari | WebKit |
| `mobile-chrome` | Pixel 5 | Chromium |
| `mobile-safari` | iPhone 12 | WebKit |

### Available Test Suites

| Suite | Directory | Purpose |
|-------|-----------|---------|
| `regression` | `tests/regression/` | Full regression — permanent tests |
| `acceptance` | `tests/acceptance/` | Ticket-driven E2E acceptance tests — temporary |
| `smoke` | `tests/smoke/` | Quick critical-path sanity checks |

Each combination produces a project name like `chromium:regression`, `firefox:smoke`, `mobile-safari:acceptance`, etc. Every project depends on the `setup` project which handles authentication.

### Running Tests

All commands are run from the `e2e/` directory.

```bash
# Run ALL projects (all browsers × all suites)
npx playwright test

# Run a single project
npx playwright test --project="chromium:regression"

# Run a specific suite across ALL browsers (glob pattern)
npx playwright test --project="*:smoke"

# Run all suites for a specific browser
npx playwright test --project="firefox:*"

# Run a single spec file (within the project's testDir)
npx playwright test --project="chromium:regression" customer.spec.ts

# Run headed (visible browser)
npx playwright test --project="chromium:smoke" --headed

# Run in debug mode
npx playwright test --project="chromium:regression" --debug
```

### How Test Routing Works

Each project sets `testDir` to the corresponding suite folder (e.g. `./tests/regression`). Playwright only picks up `.spec.ts` files inside that directory. **You do not need tags or grep patterns** — the folder structure is the filter.

---

## Folder Structure

```
e2e/
├── auth/                    # Authentication setup (runs before all tests)
│   └── auth.setup.ts        # Logs in and saves session to .auth/user.json
├── fixtures/                # Custom Playwright fixtures
│   └── base.ts              # Extends Playwright's `test` with `testData` fixture
├── helpers/                 # Shared utility functions (NOT page objects)
│   └── env-config.ts        # Environment resolution (dev, test, uat, production)
├── poms/                    # Page Object Models (one file per page)
│   └── base.page.ts         # Abstract base class — ALL POMs extend this
├── test-data/               # External test data (JSON files)
├── tests/                   # Test specs organised by type
│   ├── acceptance/          # Ticket-driven E2E acceptance tests (temporary)
│   ├── regression/          # Full regression test suites (permanent)
│   └── smoke/               # Quick smoke tests (critical path only)
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json
└── .env                     # Environment variables (not committed)
```

**Do NOT create files outside this structure. Do NOT move existing files without explicit permission.**

---

## Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Page Object Model | `{feature}.page.ts` | `vault.page.ts`, `dashboard.page.ts` |
| Regression spec | `{feature}.spec.ts` in `tests/regression/` | `vault.spec.ts` |
| Smoke spec | `{feature}.spec.ts` in `tests/smoke/` | `vault.spec.ts` |
| Acceptance spec | `{TICKET}-{description}.spec.ts` in `tests/acceptance/` | `MANT-123-vault-bulk-delete.spec.ts` |
| Test data | `{feature}.json` in `test-data/` | `vault.json` |
| Fixture | `base.ts` in `fixtures/` | Only one base fixture file |

- The `{feature}` name **must match** across POM, spec, and test-data files.
- POM files use the `.page.ts` suffix. Spec files use the `.spec.ts` suffix.
- Acceptance spec names use the **ticket key** as a prefix for traceability.

---

## Page Object Model (POM) Rules

### One Page = One POM — No Exceptions

Every distinct page/view in the application gets exactly **one** POM file in `e2e/poms/`. A POM encapsulates **all** locators and interactions for that single page.

### All POMs Extend `BasePage`

```typescript
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
}
```

### Abstract Methods — `setUp()` and `tearDown()`

Every POM **must** implement these two methods inherited from `BasePage`:

- **`setUp()`** — Navigate to the page and clean up any stale data left by previous failed test runs. Called once via `test.beforeAll` in the spec.
- **`tearDown()`** — Clean up any data created during the test suite. Called when needed in the spec (e.g. `test.afterAll`).

### NEVER Reference Another POM From Within a POM

A POM must **only** interact with its own page. If a test needs to interact with multiple pages, the **spec file** orchestrates between POMs — never the POM itself.

```typescript
// ❌ WRONG — dashboard.page.ts importing another POM
import { SettingsPage } from './settings.page';

// ✅ CORRECT — spec file uses both POMs
import { DashboardPage } from '../../poms/dashboard.page';
import { SettingsPage } from '../../poms/settings.page';
```

### POM Internal Structure

Organise every POM with these clearly separated sections using comment banners:

```typescript
// ==========================================
// LIFECYCLE (from BasePage)
// ==========================================
// setUp() and tearDown()

// ==========================================
// LOCATORS
// ==========================================
// Getter properties returning Locator objects

// ==========================================
// NAVIGATION
// ==========================================
// Methods to navigate to the page

// ==========================================
// VERIFICATION
// ==========================================
// Methods that assert page state (expect calls)

// ==========================================
// CREATE / EDIT / DELETE / etc.
// ==========================================
// Action methods grouped by CRUD operation
```

### Detailed JSDoc on Every Method

Every public method in a POM **must** have a detailed JSDoc comment that describes exactly what it does, step by step. This is critical because an LLM will read these comments to understand what actions are available and generate test specs from them.

```typescript
/**
 * Creates a new item via the "Create" modal.
 *
 * Steps:
 * 1. Clicks the "Create" button to open the modal dialog.
 * 2. Fills in all required fields.
 * 3. Clicks "Submit" and waits for the modal to close.
 *
 * @param name  - Display name for the item
 * @param value - The value to store
 */
async createItem(name: string, value: string): Promise<void> {
```

---

## Test Independence & Parallelism

### Every Test Must Be Fully Independent

Each test must be able to run **in isolation** and in **any order**. A test must **never** depend on state created by a previous test.

### Tests Must Be Parallel-Safe

All tests are expected to run in parallel across multiple workers. To avoid collisions:

- Use `stampUnique` to append unique suffixes to all test data.
- Never share mutable state between tests.
- Each test creates its own data, verifies it, and (if needed) cleans it up.

### Each Test Navigates Independently

Every test must navigate to its page via the POM's navigation method. Do **not** rely on the URL or page state left by a previous test.

---

## Test Data Rules

### External JSON Files

All test data lives in `e2e/test-data/{feature}.json`. **Never hardcode data in spec or POM files.**

```json
{
    "items": [
        { "name": "ItemA", "key": "keyA", "value": "some-value" },
        { "name": "ItemB", "key": "keyB", "value": "other-value" }
    ],
    "updatedItem": { "name": "Updated", "value": "new-value" }
}
```

### `stampUnique` — Collision-Free Data

The `testData` fixture (from `e2e/fixtures/base.ts`) automatically appends a unique suffix (timestamp + random ID) to **every string value** in the JSON. This guarantees parallel workers never collide.

Example: `"keyA"` → `"keyA-1711234567890-a1b2c3"`

### Adding Data for a New Feature

1. Create `e2e/test-data/{feature}.json` with template data.
2. Add a TypeScript interface in `e2e/fixtures/base.ts` for the new data shape.
3. Add the new feature to the `FeatureTestData` interface.
4. Load it in the `testData` fixture alongside existing features.

---

## Fixture Rules

### Custom `test` Object

Always import `test` from `e2e/fixtures/base.ts`, **not** from `@playwright/test`:

```typescript
// ✅ CORRECT
import { test } from '../../fixtures/base';

// ❌ WRONG — loses access to testData fixture
import { test } from '@playwright/test';
```

### Using `testData` in Tests

Destructure `testData` from the test arguments:

```typescript
test('should create an item', async ({ page, testData }) => {
    const pom = new MyPage(page);
    const item = testData.feature.items[0];
    await pom.navigateToPage();
    await pom.createItem(item.name, item.value);
});
```

---

## Spec File Rules

### Structure

Every spec file follows this pattern:

```typescript
import { test } from '../../fixtures/base';
import { SomePage } from '../../poms/some.page';

test.describe('Feature Name Tests', () => {
    // One-time setup: clean stale data from previous failed runs
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext({
            storageState: 'e2e/.auth/user.json',
        });
        const page = await context.newPage();
        const pom = new SomePage(page);
        await pom.setUp();
        await page.close();
        await context.close();
    });

    test('should do something', async ({ page, testData }) => {
        const pom = new SomePage(page);
        await pom.navigateToPage();
        // ... test logic
    });
});
```

### `beforeAll` for Suite-Level Cleanup

Use `test.beforeAll` with a **manually created browser context** (loading `storageState: 'e2e/.auth/user.json'`) to call the POM's `setUp()` method. This clears stale data from previous failed runs before any test executes.

### Specs Must NOT Interact With the Page Directly

A spec file must **never** call `page.getByRole(…)`, `page.getByText(…)`, `page.locator(…)`, `page.waitForTimeout(…)`, `page.keyboard.press(…)`, or any other raw Playwright `page` method. **All page interactions must go through the POM.**

The only acceptable uses of `page` in a spec are:
1. Passing it to the POM constructor: `new SomePage(page)`.
2. Passing it to `browser.newContext()` / `context.newPage()` in `beforeAll`.

If you find yourself writing raw `page` calls in a spec, that logic belongs in a POM method.

❌ **Wrong — raw page interaction in spec:**
```typescript
test('should create token with 90-day expiry', async ({ page }) => {
    const pom = new ApiTokensPage(page);
    await pom.navigateToApiTokens();
    // BAD: spec is reaching into the page directly
    await page.getByRole('button', { name: /Create New Token/i }).click();
});
```

✅ **Correct — all interaction through the POM:**
```typescript
test('should create token with 90-day expiry', async ({ page, testData }) => {
    const pom = new ApiTokensPage(page);
    const token = testData.apiTokens.tokens[2];
    await pom.navigateToApiTokens();
    await pom.createToken(token.name, token.expiry);
    await pom.verifyTokenSuccessModal(token.name);
    await pom.closeModal();
});
```

