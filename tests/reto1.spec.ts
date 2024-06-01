import { test, expect } from '@playwright/test';

test('Primer Reto de Automatización con Playwright', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await page.locator('.material-icons card_travel').click()

  await expect(page).toHaveURL('https://automationexercise.com/products')

  await page.mouse.down()

  await page.locator('.fa fa-plus-square').click()
  await expect(page).toHaveURL('https://automationexercise.com/product_details/1')

  await page.locator('.btn btn-default cart').click()
  await expect(page.locator('.modal-content')).toBeVisible()

  await page.locator('btn btn-success close-modal btn-block').click()
  await expect(page).toHaveURL('https://automationexercise.com/product_details/1')
  await expect(page.locator('.modal-content')).toBeHidden()

});