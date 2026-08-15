import { test, expect } from '@playwright/test';
test('Rainbow Hospital browser Launch', async ({ page }) => {


  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  await expect(page.getByRole('option')).not.toHaveCount(3);

  const links = await page.locator("a").all()
  for(let eachLink of links)
  {
    console.log(await eachLink.textContent())
  }
    await page.getByRole('link',{name : 'Vaccine'}).click()
    // Pauses the test completely for 5 seconds (5000 milliseconds)
await page.waitForTimeout(5000);

});
