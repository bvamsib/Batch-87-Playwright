import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://demo.automationtesting.in/Alerts.html');

  await page.getByText("Alert with OK & Cancel ").click()
  page.on('dialog', async dialog => 
    {
    await page.waitForTimeout(2000)
    console.log(dialog.message())
    dialog.accept()
    })
  await page.locator(".btn-primary").click()
  await page.waitForTimeout(2000)
 await expect(page.locator("#demo")).toContainText('You pressed Ok')
})