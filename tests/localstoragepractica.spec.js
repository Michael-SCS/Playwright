// Ejemplo:
// Sitio: https://demo.realworld.io/
//   - Se hace login con demo@demo.com / demo
//   - Se guarda sesión
//   - Luego se accede al perfil sin necesidad de login

import { test, expect } from '@playwright/test';

test('Login y almacenar el estado', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'username' }).fill('student');
    await page.getByRole('textbox', { name: 'password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    await context.storageState({path: 'tests/storageState-practica.json'})
    //Cerramos el contexto del navegador
    await context.close()
})