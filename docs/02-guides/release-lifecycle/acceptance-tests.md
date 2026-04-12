---
sidebar_position: 3
---

# Acceptance Tests (Ticket-Driven)

Acceptance tests are **ticket-driven E2E tests** for a specific ticket or story (e.g. a Jira story). They validate the **explicit acceptance criteria** for that ticket.

They live in `tests/acceptance/` and have a lifecycle tied to the ticket — unlike regression and smoke tests, which are permanent.

## When to Create an Acceptance Test

Create an acceptance test when a ticket has **explicit success criteria** that can be verified through E2E automation. The developer working the ticket is responsible for:

1. **Updating the existing POM** (or creating a new one if it's a new page) with any new interaction methods needed.
2. **Creating the acceptance spec** in `tests/acceptance/`.

## What an Acceptance Test Should Do

- **Prove a feature meets its requirements** — verify the behaviour described in the ticket's acceptance criteria.
- **Test both happy and unhappy paths** — cover expected inputs as well as validation errors, edge cases, and permission boundaries.
- **Be self-contained** — each spec should set up its own data, run its assertions, and clean up afterwards without depending on other specs.

## Naming Convention

```
{TICKET}-{short-description}.spec.ts
```

Examples:

- `MANT-123-vault-bulk-delete.spec.ts`
- `MANT-456-webhook-retry-policy.spec.ts`
- `PROJ-789-user-profile-avatar-upload.spec.ts`

The `{short-description}` should be a brief, kebab-case summary of what the ticket validates — **not** the full ticket title.

## `test.describe` Must Include the Ticket Number

The outer `test.describe` block **must** include the ticket key so test reports are traceable back to the requirement:

```typescript
import { test } from "../../fixtures/base";
import { VaultPage } from "../../poms/vault.page";

test.describe("MANT-123: Vault Bulk Delete", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      storageState: "e2e/.auth/user.json",
    });
    const page = await context.newPage();
    const vault = new VaultPage(page);
    await vault.setUp();
    await page.close();
    await context.close();
  });

  test("should select multiple secrets and delete them in one action", async ({
    page,
    testData,
  }) => {
    // ... validates acceptance criteria from MANT-123
  });
});
```

## POM Rules Still Apply

Acceptance tests follow **all** the same POM rules as regression/smoke tests:

- Use the **existing POM** for the page under test. If the ticket requires new interactions, **add methods to the existing POM** — do not create a second POM for the same page.
- Only create a **new POM** if the ticket introduces an entirely new page.
- All new POM methods must have full JSDoc — see the [TestSkills `create-pom` skill](../test-skills) for guidance on generating compliant POMs with your AI agent.

## Who Is Responsible

The **developer working the ticket** is responsible for creating the acceptance test as part of delivering the feature. A ticket is not considered complete until its acceptance test is written, passing, and merged.

## Promotion Lifecycle

Acceptance tests are **temporary by design**. Once the ticket is complete and the feature is stable, the test must be reviewed and either:

| Action                    | When to use                                                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Promote to regression** | The feature is permanent and should be validated on every run. Move the spec to `tests/regression/`, rename to `{feature}.spec.ts` (dropping the ticket prefix), and merge into an existing regression spec if one already covers that page. |
| **Promote to smoke**      | The feature is on the critical path and should be part of the quick sanity suite. Move to `tests/smoke/` and rename.                                                                                                                         |
| **Delete**                | The test is fully covered by existing regression/smoke tests, or the feature was reverted. Remove the spec file.                                                                                                                             |

**Promotion checklist:**

1. Remove the ticket key from the filename → `{feature}.spec.ts`.
2. Update `test.describe` — remove the ticket key prefix (e.g. `'MANT-123: Vault Bulk Delete'` → `'Vault Bulk Delete'`), or merge the tests into the existing `test.describe` block in the target spec.
3. Ensure the POM methods added for this ticket already have full JSDoc.
4. Verify tests pass in the new location.

## Staleness Policy

An acceptance test becomes **stale** when its ticket is closed but the spec was never promoted or deleted. To prevent accumulation:

- **Review `tests/acceptance/` after every sprint/release.** Any spec whose ticket is in a "Done" or "Closed" state should be promoted or deleted.
- **Never leave acceptance tests running indefinitely.** They are a staging area, not a permanent home.
