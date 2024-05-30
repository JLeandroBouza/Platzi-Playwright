import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://platzi.com/');
  await page.goto('https://www.netflix.com/ar/');
  await page.getByLabel('Email').first().click();
  await page.getByLabel('Email').first().fill('jajajajaja@gmail.com');
  await page.getByRole('button', { name: 'Comenzar' }).first().click();
  await page.getByLabel('Ingresa tu contraseña').click();
  await page.getByLabel('Ingresa tu contraseña').fill('asdasdasdsa');
});