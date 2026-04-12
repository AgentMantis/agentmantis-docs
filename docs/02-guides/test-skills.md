---
sidebar_position: 2
---

# TestSkills — AI-Powered Test Writing

[TestSkills](https://github.com/agentmantis/test-skills) is an open-source collection of agent skills that teach AI coding assistants how to write production-grade Playwright E2E tests — structured correctly, parallel-safe, and lifecycle-aware.

Install once, and your AI agent knows how to scaffold a test suite, generate Page Object Models, write regression and handover tests, and promote them through the release lifecycle — the way a senior SDET would.

> Works with 40+ AI coding agents including Claude Code, Cursor, Codex, GitHub Copilot, Augment, Gemini CLI, and Windsurf.

## Installation

```bash
npx skills add AgentMantis/test-skills
```

Install for a specific agent:

```bash
npx skills add AgentMantis/test-skills --agent claude-code
npx skills add AgentMantis/test-skills --agent cursor
npx skills add AgentMantis/test-skills --agent codex
```

Install a single skill instead of the full set:

```bash
npx skills add AgentMantis/test-skills --skill create-pom
```

Install globally so the skills are available in every project:

```bash
npx skills add AgentMantis/test-skills -g
```

## Available Skills

| Skill | Type | Invoke | Description |
|---|---|---|---|
| `e2e-test-conventions` | Reference | _auto-loaded_ | Core conventions — project structure, naming, selectors, auth, parallelism, and environment config |
| `e2e-test-suite-init` | Task | `/e2e-test-suite-init [name]` | Scaffolds a complete `e2e/` directory with config, base classes, fixtures, and helpers |
| `create-pom` | Task | `/create-pom [page]` | Creates a Page Object Model with lifecycle methods, locators, JSDoc, and comment banners |
| `create-regression-test` | Task | `/create-regression-test [feature]` | Scaffolds a regression or smoke spec with test data JSON, fixtures, and `beforeAll` cleanup |
| `create-handover-test` | Task | `/create-handover-test [TICKET] [desc]` | Creates a ticket-driven handover test with correct naming and promotion lifecycle |
| `promote-handover-test` | Task | `/promote-handover-test [TICKET]` | Promotes a handover test to the regression or smoke suite |

The `e2e-test-conventions` reference skill is loaded automatically whenever any task skill runs — you don't need to invoke it directly.

## Workflow

Skills are designed to be used in sequence as your project grows:

```
e2e-test-conventions        ← always active (auto-loaded)
  └── e2e-test-suite-init   ← run once per project
        ├── create-pom                  ← per page or view
        ├── create-regression-test      ← per feature
        └── create-handover-test        ← per ticket
              └── promote-handover-test ← when the ticket is done
```

A typical flow for a new feature:

1. Ask your agent to **set up the suite** (once per project): `Set up an e2e test suite for my project`
2. Ask it to **create a POM** for the page you're testing: `Create a page object for the checkout page`
3. Ask it to **write a regression test**: `Write a regression test for the checkout feature`
4. For a ticket in progress, ask it to **create a handover test**: `Write a handover test for MANT-456`
5. Once the ticket ships, ask it to **promote**: `Promote the MANT-456 test to regression`

## Using TestSkills in Claude Code

In Claude Code, each task skill is automatically registered as a slash command:

| Command | What it does |
|---|---|
| `/e2e-test-suite-init` | Scaffold a new `e2e/` project structure |
| `/create-pom` | Generate a Page Object Model |
| `/create-regression-test` | Generate a regression or smoke spec |
| `/create-handover-test` | Create a ticket-driven handover test |
| `/promote-handover-test` | Promote a handover test to regression |

## Customization

TestSkills teaches generic Playwright patterns that work with any UI framework (React, Vue, Angular, Svelte, and more). To adapt the skills to your project's specific base classes, fixtures, folder structure, or auth flow, see [docs/CUSTOMIZATION.md](https://github.com/agentmantis/test-skills/blob/main/docs/CUSTOMIZATION.md) in the repository.
