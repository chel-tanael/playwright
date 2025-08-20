import { test, expect } from '@playwright/test';
import { userData } from '../data/data.ts';
import { radioB } from '../data/data.ts';

test('Go to Elements page', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await expect(page).toHaveTitle(/DEMOQA/);
  await expect(page).toHaveURL(/elements/);
  await page.close();
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
  await page.close();
});

test('Verify and Test Text Box', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
  await expect(page.locator('#userName-label', { hasText: 'Full Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
  await expect(page.locator('#userEmail-label', { hasText: 'Email' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'name@example.com' })).toBeVisible();
  await expect(page.locator('#currentAddress-label', { hasText: 'Current Address' })).toBeVisible;
  await expect(page.getByRole('textbox', { name: 'Current Address' })).toBeVisible();
  await expect(page.locator('#permanentAddress-label', { hasText: 'Permanent Address' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(userData.fullName);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(userData.email);
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(userData.currentAddress);
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(userData.permanentAddress);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('p#name', { hasText: `Name:${userData.fullName}` })).toBeVisible();
  await expect(page.locator('p#email', { hasText: `Email:${userData.email}` })).toBeVisible();
  await expect(page.locator('p#currentAddress', { hasText: `Current Address :${userData.currentAddress}` })).toBeVisible();
  await expect(page.locator('p#permanentAddress', { hasText: `Permananet Address :${userData.permanentAddress}` })).toBeVisible();
  await page.close();
});

test('Verify and Test Check Box', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  

});

test('Verify and Test Radio Button', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Radio Button' }).click();
  await expect(page.getByRole('heading', { name: 'Radio Button' })).toBeVisible();
  await expect(page.locator('.mb-3', { hasText: 'Do you like the site?' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Impressive' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'No' })).toBeVisible();
  await page.locator('label[for="yesRadio"]').click();
  await expect(page.locator('p.mt-3', { hasText: `You have selected ${radioB.yes}` })).toBeVisible();
  await page.locator('label[for="impressiveRadio"]').click();
  await expect(page.locator('p.mt-3', { hasText: `You have selected ${radioB.impressive}` })).toBeVisible();
  await expect(await page.getByRole('radio', { name: 'No' }).isDisabled()).toBe(true);
});