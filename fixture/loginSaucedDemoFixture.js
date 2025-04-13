//Conectarse https://www.saucedemo.com/
//Realizar login con el usuario standard_user y la contraseña secret_sauce
//Validar que el login fue exitoso y entra a la pagina de productos

import { test as base, expect } from '@playwright/test';

export {expect};

export const test = base.extend({
    saucedLogin: async ({ page }, use) => {
        // Navegar a la página de inicio de sesión de Sauce Demo
        await page.goto('https://www.saucedemo.com/');
        
        // Ingresar el nombre de usuario y la contraseña
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();
        // hace que la página ya autenticada esté disponible para los test.spec.js
        await use(page);
    }
});