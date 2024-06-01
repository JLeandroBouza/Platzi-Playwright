import { test, expect } from '@playwright/test';

test('Jugando con assertions', async ({ page }) => {

  await page.goto('http://uitestingplayground.com/textinput');

  
  await expect(page.locator('#newButtonName')).toBeVisible();

  await page.locator('#newButtonName').fill('Leandro');

  await page.locator('#updatingButton').click();

  await expect(page.locator('#updatingButton')).toContainText('Leandro');


});