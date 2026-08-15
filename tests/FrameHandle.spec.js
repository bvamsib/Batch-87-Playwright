import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://demo.automationtesting.in/Frames.html');
//page.frame({url: 'https://demo.automationtesting.in/SingleFrame.html'}).locator("input").first().fill("Playwright with js")
page.frameLocator("#singleframe").locator("input").first().fill("Playwright with js") 
await page.waitForTimeout(5000)
});