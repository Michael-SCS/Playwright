//importar test y expect desde playwright
const {test,expect} = require ('@playwright/test');

//PRIMER PASO - LLAMAR STORAGE STATE
test.use({
    storageState: 'tests/storageState.json' //llamamos el archivo de storage state que contiene las cookies y el local storage, indicamos que vamos a reutilzar el estado de la sesion almacenado en el archivo storageState.json
})
//Definimos una prueba que reutilizará una sesión ya activa
test('Ingreasr a una página ya autenticada', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html'); //navegamos a la página de inventario de saucedemo

    await expect(page.locator('.inventory_item')).toHaveCount(6); //validamos que existan 6 productos en la página de inventario
})