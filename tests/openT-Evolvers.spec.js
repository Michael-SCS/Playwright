// Abrir la página de t-evolvers y validar el contenido del titulo.
// adiciional tomar un screenshot de la página.

// Hacer que la prueba sea exitosa
// Hacer que la prueba faller
//Prueba exitosa
const {test, expect} = require('@playwright/test');
test('Verificar que t-evolvers carga correctamente y contenga el titulo t-evolvers', async ({page}) => {
    await page.goto('https://t-evolvers.com/');
    await page.screenshot({path: 'image/t-evolvers.png'});
    await expect(page).toHaveTitle('T-Evolvers');
});
test('Hacer que falle la prueba esperando otro nombre', async({page}) => {
    await page.goto('https://t-evolvers.com');
    await page.screenshot({path: 'image/t-evolversFallo.png'});
    await expect(page).toHaveTitle('Tevolversito')
})