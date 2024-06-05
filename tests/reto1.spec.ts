import { test, expect } from '@playwright/test';

test('Primer Reto de Automatización con Playwright', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect (page.locator('.overlay-content:has-text("Rs. 500")').nth(0)).toBeVisible();

  // hacer click en el add to cart del modal
  await page.locator('.single-products .productinfo:has-text("Blue Top") a[data-product-id="1"]').first().click();

  await expect(page.locator('#cartModal')).toBeVisible();

  await page.locator('div.modal-footer button.close-modal').click();

});