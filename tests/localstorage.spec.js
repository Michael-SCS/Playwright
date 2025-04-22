//importamos los objetos de test expect desde playwright
const {test, expect} = require ('@playwright/test')

//Definir un test que va  a usar el navegador sin un contexto predeterminado, tomamos el navegador sin cookies, completamente limpio
test('Login y alamenar el estado', async ({browser}) => {
    //Crea un nuevo conexto del navegador (Sin Cookies, completamente limpio)
    const context = await browser.newContext();

    //Abrir una nueva pestaña con el contexto browser, decirle a page que va a eradar de conext newpage
    const page = await context.newPage();

    //Abrimos una nueva pagina
    await page.goto('https://www.saucedemo.com/');
    //Iniciamos sesion con el usuario estandar
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    //Llenamos el campo de contraseña con el password estandar
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    //Hacemos click en el boton de login
    await page.getByRole('button', { name: 'Login' }).click();

    //Validamos el cambio en la URL, para confirmar login exitoso
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    //Almacenar el estado de la sesión (Cookies + LocalStorage) en un archivo Json
    await context.storageState({path: 'tests/storageState.json'})
    //Cerramos el contexto del navegador
    await context.close()
})