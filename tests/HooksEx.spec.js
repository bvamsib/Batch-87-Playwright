import { test, expect } from '@playwright/test';
let page;

test.afterEach(async()=>
{
  console.log("After each Test")
}
)

test.afterEach(async()=>
{
  console.log("After each Test 2222")
}
)

test.beforeAll(async()=>
{
  console.log("Before All")
}
)

test.beforeAll(async()=>
{
  console.log("Before All 2222222")
}
)

test.afterAll(async()=>
{
  console.log("After All")
}
)

test.beforeEach(async({context})=>
{
  page = await context.newPage();
 const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
 console.log("Before each Test")
})


test('Rainbow Hospital browser Launch', async () => {
 
  const logo = await page.locator("(//img[contains(@alt,'Rainbow Hospitals')])[1]");
  await page.getByText("Book an Appointment").click();
  const txt_Dr = await page.getByText("Select Doctors ")
  await expect(txt_Dr).toBeVisible()
  const wc = await page.locator("//li//span[text()='Women Care']")
  await wc.check()
  await expect(wc).toBeChecked()
  await page.waitForTimeout(2000)

});

test('Hovering', async () => {
  const logo = await page.locator("//a[text()='  Fertility Care']").hover()
  await page.locator("//a[text()='Embryo Donor Treatment']").nth(1).click()
 await page.waitForTimeout(2000)
});

