import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  await page.waitForTimeout(5000)
  let drp_location = await page.locator("//select[@name='region']").click()
   await page.waitForTimeout(2000)
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
  //  let location = await page.locator("//select[@name='region']/option[text()='Rajahmundry']")
  //  await location.click();
      await page.waitForTimeout(2000)
     
     // verify Hyderabd in list or not
});