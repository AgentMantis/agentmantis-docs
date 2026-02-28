---
sidebar_position: 4
---

# Self-Healing

Agent Mantis automatically adapts to UI changes so your tests don't break with every deployment.

## How self-healing works

When a selector no longer matches an element, Agent Mantis:

1. Analyses the page structure
2. Identifies the most likely matching element
3. Updates the selector automatically
4. Logs the change for your review

## When self-healing applies

- Element ID or class name changed
- Element moved to a different position in the DOM
- Parent container restructured

## Reviewing healed selectors

Check the run logs for self-healing events. Each event shows:

- The original selector
- The new selector
- Confidence score

<!-- TODO: Add real self-healing example -->

