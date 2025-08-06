import { test, expect } from '@playwright/test';

test('Go to Elements page', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await expect(page).toHaveTitle(/DEMOQA/);
  await expect(page).toHaveURL(/elements/);
});

test('Verify submenus under Elements', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Text Box' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Check Box' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Radio Button' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Web Tables' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Buttons' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Links' }).nth(0)).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Broken Links - Images' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Upload and Download' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Dynamic Properties' })).toBeVisible();
});

test('Verify and Test Text Box', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
  expect(page.getByText('Full Name')).toBeVisible;
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();

  expect(page.getByText('Email')).toBeVisible;
  await expect(page.getByRole('textbox', { name: 'name@example.com' })).toBeVisible();
  expect(page.getByText('Current Address')).toBeVisible;
  await expect(page.getByRole('textbox', { name: /currentAddress/ })).toBeVisible();
  expect(page.getByText('Permanent Address')).toBeVisible;
  await expect(page.getByRole('textbox', { name: /permanendAddress/ })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();

  await page.getByText('Full Name').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('test');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('dsdfsdf');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cvbc');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('dfgdfg');
})