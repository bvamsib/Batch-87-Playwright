import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const logo = await page.locator("(//img[contains(@alt,'Rainbow Hospitals')])[1]");

  await page.getByText("Book an Appointment").click();
  const txt_Dr = await page.getByText("Select Doctors ")
  await expect(txt_Dr).toBeVisible()
  //console.log(await page.locator('.catalogLists h2').allTextContents())
  const wc = await page.locator("//li//span[text()='Women Care']")
  await wc.check()
  await expect(wc).toBeChecked()
  await page.waitForTimeout(2000)

});