import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const logo = await page.locator("(//img[contains(@alt,'Rainbow Hospitals')])[1]");
  await expect(logo).toBeVisible()
  await page.getByTitle("Patient Portal").click();
 const allPages = context.pages();
 let eachPage;
 for(eachPage of allPages)
 {
   let titleOfPage = await eachPage.title();
   if(titleOfPage.includes("Login"))
   {
    await eachPage.waitForLoadState();
     await eachPage.bringToFront();
     break;
   } 
 }
   await eachPage.locator("#mobile").first().fill("9999911111")
    await eachPage.locator("#submitOTP").first().click();
    await eachPage.waitForTimeout(3000)
    

});
