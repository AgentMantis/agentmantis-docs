---
sidebar_position: 1
---

# Playwright

Agent Mantis uses [Playwright](https://playwright.dev/) as its browser automation engine, supporting Chromium, Firefox, and WebKit.

## Configuration

Playwright is a **built-in** integration — no credentials or external account setup is required. It is always available in the editor command palette.

## Editor usage

Add a **Playwright** node to the canvas. The settings panel offers three ways to provide your test:

### Test source modes

| Mode | How it works |
|---|---|
| **Inline** | Write or paste a Playwright test directly in the editor. The test file is stored in Cloud Storage. |
| **Zip upload** | Upload a `.zip` archive containing your full test suite. Choose a config file and project after upload. |
| **Integration** | Connect the Playwright node to a **GitHub** or **Bitbucket** node on the canvas. The runner clones the repository at execution time. |

### Running tests

Once a test source is configured the node is marked as ready (green completion indicator). Connect it to downstream nodes — for example an **LLM** node to summarise failures, a **Slack** node to alert the team, or a **Jira** node to create tickets.

The workflow runner executes the test inside a containerised Playwright environment with all browsers pre-installed.

## Playwright version

Agent Mantis tracks the latest stable Playwright release. Check the [Releases](../../releases/changelog) page for the current version.

