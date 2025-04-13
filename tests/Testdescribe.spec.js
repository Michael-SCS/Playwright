//Es una función que permite agrupar varios tests relacionados bajo un mismo contexto

import { test, expect } from '@playwright/test';

test.describe('Validaciones en la página principal', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.t-evolvers.com/')
    })

    test('Validar el título de la página', async ({ page }) => {
        await expect(page).toHaveTitle(/T-Evolvers/)
    })

    test('Aceptar Cookies', async ({ page }) => {

        await page.getByRole('button', { name: 'Aceptar' }).click();

        await expect(
            page.getByRole('button', { name: 'Descargar portafolio' })
        ).toBeVisible();
    });
})  