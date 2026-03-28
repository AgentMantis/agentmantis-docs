---
sidebar_position: 1
---

# My tests keep failing or hanging, but they work fine on my computer

**Symptoms:** Tests pass when run locally in VSCode or on your machine, but fail, hang, or never complete when run in the cloud (e.g. Cloud Run, CI pipeline).

---

## Why this happens

Running tests in a cloud container is fundamentally different from running them on your local machine. Your development machine likely has plenty of CPU, memory, and a full desktop environment. Cloud containers, by default, are much more constrained. Several factors can cause tests that work locally to fail in the cloud:

### Not enough resources

Browser automation is resource-intensive. Each browser instance consumes significant CPU and memory — especially when rendering complex pages, executing JavaScript, or capturing screenshots and video. If the container doesn't have enough resources, browsers will slow down, time out, or crash entirely.

### Too many workers

Test runners like Playwright default to running tests in parallel across multiple workers. Each worker launches its own browser instance, multiplying the resource requirements. If your tests weren't designed to run in parallel — for example, they share state, modify the same data, or depend on a specific execution order — running them concurrently will cause unpredictable failures such as race conditions, data conflicts, or flaky assertions.

### Too many browsers

If your test configuration runs across multiple browsers (Chromium, Firefox, WebKit), each browser adds another full process. Three browsers with four workers means twelve simultaneous browser instances — that's a lot of CPU and memory for a cloud container.

---

## How to fix it

### 1. Increase CPU and memory

Give the container enough power to handle browser automation. Set the resources to full power:

- **CPU:** 8
- **Memory:** 32 GB

This ensures the container has headroom for browser rendering, JavaScript execution, and test orchestration. You can scale back later once tests are stable, but start with full power to rule out resource issues.

### 2. Reduce workers to 1

Set the number of parallel workers to **1**. This forces tests to run sequentially, eliminating any parallel execution issues:

```bash
npx playwright test --workers=1
```

Or in your `playwright.config.ts`:

```typescript
export default defineConfig({
  workers: 1,
});
```

Running with a single worker removes the risk of tests interfering with each other. If tests pass with one worker but fail with more, that tells you the tests have shared-state or ordering dependencies that need to be addressed before you can safely parallelise.

### 3. Run in a single browser

Limit your test run to one browser to reduce resource consumption:

```bash
npx playwright test --project=chromium
```

Or update your config to only define one project:

```typescript
export default defineConfig({
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // Comment out other browsers until tests are stable
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

Once your tests run reliably in a single browser, you can add browsers back one at a time.

---

## Summary

| Setting | Recommended value | Why |
|---|---|---|
| **CPU** | 8 | Browser automation needs processing power |
| **Memory** | 32 GB | Each browser instance consumes significant memory |
| **Workers** | 1 | Eliminates parallel execution issues |
| **Browsers** | 1 (Chromium) | Reduces total resource consumption |

Start with these settings to get your tests passing in the cloud. Once stable, you can experiment with increasing workers or adding browsers — but do so incrementally and watch for failures.
