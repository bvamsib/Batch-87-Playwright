import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const logo = await page.locator("(//img[contains(@alt,'Rainbow Hospitals')])[1]");
  await expect(logo).toBeVisible()
  const pagePrmoise = context.waitForEvent('page');
  await page.getByTitle("Patient Portal").click();
  
  const newPage = await pagePrmoise
  await newPage.waitForLoadState();
  await newPage.bringToFront();
    await newPage.locator("#mobile").first().fill("9999911111")
    await newPage.locator("#submitOTP").first().click();
    await newPage.waitForTimeout(3000)

});
