const {test, expect} = require('@playwright/test');

//Este es un test que verifica que Google carga correctamente y que contenga el titulo Google (Escenario de prueba)
test('Verificar que Google carga correctamente y contenga el titulo Google', async ({page}) => { 
    await page.goto('https://www.google.com/');
    await page.screenshot({path: 'image/google.png'});
    await expect(page).toHaveTitle('Google');
});