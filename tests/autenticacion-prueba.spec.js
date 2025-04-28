const {test,expect} = require ('@playwright/test');

test.use({
    storageState: 'tests/storageState-practica.json'
})
test('Ingreasr a la página ya autenticada', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/logged-in-successfully/');

    await expect(page.getByText('Logged In Successfully')).toBeVisible() // Verifica que el texto esté visible en la página
})