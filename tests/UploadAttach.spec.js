import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://demo.automationtesting.in/FileUpload.html');
await expect(page.locator("//span[text()='Remove']")).not.toBeVisible()
    //  await page.locator('#input-4').setInputFiles('C:/Users/Vamsi/Desktop/img1.PNG')
    await page.locator('#input-4').setInputFiles(['C:/Users/Vamsi/Desktop/img1.PNG', 'C:/Users/Vamsi/Desktop/Batch 87.txt'])
    await expect(page.locator("//span[text()='Remove']")).toBeVisible()
    await page.locator('#input-4').setInputFiles([])
    await page.locator('#input-4').setInputFiles([])
    await expect(page.locator("//span[text()='Remove']")).not.toBeVisible()
  await page.waitForTimeout(2000)

});