import { test, expect } from '@playwright/test';

test('Go to Elements page', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await expect(page).toHaveTitle(/DEMOQA/);
  await expect(page).toHaveURL(/elements/);
  await expect(page.getByRole('listitem').filter({ hasText: 'Text Box' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Check Box' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Radio Button' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Web Tables' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Buttons' })).toBeVisible();
  //await expect(page.getByRole('listitem').filter({ hasText: 'Links' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Broken Links - Images' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Upload and Download' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Dynamic Properties' })).toBeVisible();

  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click()


});