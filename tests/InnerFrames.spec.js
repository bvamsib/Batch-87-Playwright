import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.locator('.analystic').nth(1).click()
let parentFrame = await page.frame({url: 'https://demo.automationtesting.in/MultipleFrames.html'})
let childFrames = await parentFrame.childFrames();
await childFrames[0].locator("input").first().fill("Today is Friday")
await page.waitForTimeout(5000)
});