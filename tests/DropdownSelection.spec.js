import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');

  let locations = page.locator("//select[@name='region']/option")
  //await locations.selectOption({index: 5})
   let lists = await locations.allTextContents()
   await expect(lists).toContain("Hyderabad")
     await page.waitForTimeout(2000)
     
     // verify Hyderabd in list or not
});