import { test, expect } from '@playwright/test';

test('Rainbow Hospital browser Launch', async ({ page, context }) => {
  const siteLoaded = await page.goto('https://www.rainbowhospitals.in/');
  const bookApt = await page.getByText("Book an Appointment")
  await expect(bookApt).toBeEnabled()
  await expect(bookApt).toContainText('Book') // partial text matches
  await expect(bookApt).toHaveText('Book an Appointment')
  await expect(bookApt).toHaveAttribute('type', 'submit')
  await expect(bookApt).not.toHaveCount(3)
});