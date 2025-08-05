import { test, expect } from '@playwright/test';

test('DEMOQA Screen Validation', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveTitle(/DEMOQA/);
  await expect(page.getByRole('heading', { name: 'Elements' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Forms' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Alerts, Frame & Windows' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Widgets' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Interactions' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Book Store Application' })).toBeVisible();
});