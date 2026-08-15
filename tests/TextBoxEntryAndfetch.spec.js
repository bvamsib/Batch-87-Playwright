import { test, expect } from '@playwright/test';
test('Rainbow Hospital browser Launch', async ({ page }) => {

      const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
     // page.getByPlaceholder("Search Doctor's, Speciality, Blog ").first().fill("Cardiac")
//page.getByPlaceholder("Search Doctor's, Speciality, Blog ").first().pressSequentially("Diabetic")
let search = await page.getByPlaceholder("Search Doctor's, Speciality, Blog ").first()
search.fill("Diabetic")
// page.keyboard.press('D')
// await page.waitForTimeout(300)
// page.keyboard.press('i')
// await page.waitForTimeout(300)
// page.keyboard.press('a')
// await page.waitForTimeout(300)
// page.keyboard.press('b')
// await page.waitForTimeout(300)
// page.keyboard.press('e')
// await page.waitForTimeout(300)
// page.keyboard.press('t')
// await page.waitForTimeout(300)
// page.keyboard.press('i')
// await page.waitForTimeout(300)
// page.keyboard.press('c')

await expect.soft(search).toHaveValue('Diabetic')
const value = await search.inputValue()
console.log(value)

    //  await page.waitForTimeout(3000)
});