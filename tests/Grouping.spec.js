import { test, expect } from '@playwright/test';

// test.beforeEach(async({context})=>
// {
//   page = await context.newPage();
//  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
//  console.log("Before each Test")
// })

test.describe('checkbox and Hovering', () =>{
test.skip('Check box selection @smoke', {tag: '@sanity'}, async ({page}) => {
 const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const logo = await page.locator("(//img[contains(@alt,'Rainbow Hospitals')])[1]");
  await page.getByText("Book an Appointment").click();
  const txt_Dr = await page.getByText("Select Doctors ")
  await expect(txt_Dr).toBeVisible()
  const wc = await page.locator("//li//span[text()='Women Care']")
  await wc.check()
  await expect(wc).toBeChecked()
  await page.waitForTimeout(2000)
});

test('Hovering', {tag: '@regression'}, async ({page}) => {
  test.slow()
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const logo = await page.locator("//a[text()='  Fertility Care']").hover()
  await page.locator("//a[text()='Embryo Donor Treatment']").nth(11).click()
 await page.waitForTimeout(2000)
});
})
