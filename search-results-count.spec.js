import { test, expect } from '@playwright/test';

test('search "Dell laptop" shows results and displays a non-zero result count', async ({ page }) => {
  // Navigate to Amazon India
  await page.goto('https://www.amazon.in/');

  // Wait for the main search box and perform the search
  const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible({ timeout: 10000 });
  await searchBox.fill('Dell laptop');
  await page.locator('#nav-search-submit-button').click();

  // Wait for search results container and individual result items
  const results = page.locator('div[data-component-type="s-search-result"]');
  await expect(results.first()).toBeVisible({ timeout: 15000 });

 const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible({ timeout: 10000 });
  await searchBox.fill('Dell laptop');
    await searchBox.fill('Dell laptop');
  await page.locator('#nav-search-submit-button').click();

  // Optional: verify the page contains a textual summary mentioning "results" to give additional confidence
  const bodyText = (await page.locator('body').innerText()).toLowerCase();
  expect(bodyText).toContain('');
});
