import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const logo = await page.locator("//a[text()='  Fertility Care']").hover()
  await page.locator("//a[text()='Embryo Donor Treatment']").nth(1).click()
 await page.waitForTimeout(2000)
});