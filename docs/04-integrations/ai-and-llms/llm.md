---
sidebar_position: 1
---

# LLM

Run AI-powered analysis using a configurable language model.

## Configuration

No external credentials are required. The LLM node uses the platform's built-in AI backend.

## Editor usage

Add an **LLM** node to the canvas.

### Data tab

| Field | Description |
|---|---|
| **Model** | Select the language model to use |
| **Prompt** | The prompt text (supports variable interpolation from upstream nodes) |

### Workflow example

Connect a **Playwright** node → **LLM** node to analyse test results. The LLM can summarise failures, suggest fixes, or classify issues. Wire the LLM output into a **Slack** or **Jira** node to take automated action on the analysis.
