---
sidebar_position: 0
slug: /integrations
---

# Integrations Overview

Agent Mantis connects to your existing tools so workflows can pull data, run actions, and push results — all from the visual editor canvas.

## How integrations work

Every integration follows a two-step pattern:

1. **Configure** — Connect your account in the portal's **Integrations** page. Each integration type has its own setup form (API keys, OAuth, or service accounts depending on the tool).
2. **Use in the editor** — Drag the integration node onto the canvas, select your connection, choose an operation, and fill in the fields. Each integration shows only the fields relevant to the selected operation.

### Configuration (Portal)

Navigate to **Settings → Integrations** in the portal. Click **Add Integration**, choose the type, and complete the connection form. Credentials are encrypted and stored securely under your team.

Once configured, the integration appears as "connected" and its node becomes available in the editor's command palette.

### Editor usage (Canvas)

Open a workflow in the editor and press <kbd>/</kbd> to open the command palette. Select the integration node to add it to the canvas. Each node has:

- **Data tab** — Operation-specific fields (e.g. channel, message, repository, branch).
- **Config tab** — Connection selector and management actions (configure, disconnect).

Nodes can be wired together with connections so the output of one node feeds into the next.

## Available integrations

### Testing & Automation

| Integration | Description |
|---|---|
| [Playwright](/docs/integrations/playwright/overview) | Browser-based test execution with inline, zip, or repository sources |
| [WCAG](/docs/integrations/wcag) | Accessibility compliance testing |
| [OWASP](/docs/integrations/owasp) | Security vulnerability scanning |

### AI & Language Models

| Integration | Description |
|---|---|
| [LLM](/docs/integrations/llm) | AI-powered analysis using configurable language models |

### Version Control

| Integration | Description |
|---|---|
| [GitHub](/docs/integrations/github) | Repository browsing, cloning, and file access |
| [Bitbucket](/docs/integrations/bitbucket) | Repository browsing, cloning, and file access |

### Communication

| Integration | Description |
|---|---|
| [Slack](/docs/integrations/slack) | Send messages and create channels |
| [Email](/docs/integrations/email) | Send and receive emails with filtering |
| [Google Chat](/docs/integrations/googlechat) | Send messages to Google Chat spaces |

### Project Management

| Integration | Description |
|---|---|
| [Jira](/docs/integrations/jira/overview) | Create, update, and manage Jira issues |
| [Asana](/docs/integrations/asana) | Create and manage Asana tasks |

### Cloud Storage

| Integration | Description |
|---|---|
| [Google Drive](/docs/integrations/googledrive) | Upload and manage files in Google Drive |
| [Google Sheets](/docs/integrations/googlesheets) | Read and write spreadsheet data |

### Workflow

| Integration | Description |
|---|---|
| [Flow](/docs/integrations/flow) | Execute another workflow as a sub-workflow |



