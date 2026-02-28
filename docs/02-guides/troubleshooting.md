---
sidebar_position: 5
---

# Troubleshooting

Common issues and how to resolve them.

## Test is timing out

**Symptoms:** Run fails with a timeout error.

**Causes:**
- Target page is slow to load
- Selector is not matching any element
- Network issues

**Solutions:**
- Increase the workflow timeout setting
- Check that the target URL is accessible
- Review the step that failed — the screenshot will show the page state

## Selector not found

**Symptoms:** Step fails with "element not found".

**Solutions:**
- Verify the element exists on the page
- Check if the element is behind a modal, iframe, or lazy-load
- Agent Mantis's self-healing may suggest an alternative selector

## Authentication failures

**Symptoms:** Login steps fail or session expires mid-test.

**Solutions:**
- Verify credentials in your environment secrets
- Check if 2FA is enabled on the test account
- Use a dedicated test account without 2FA

## CI run works locally but fails in pipeline

**Solutions:**
- Ensure all environment variables are set in CI secrets
- Check that the CI runner has network access to the target
- Review browser/OS differences (headless Chrome behaves slightly differently)

<!-- TODO: Add more troubleshooting entries as issues arise -->

