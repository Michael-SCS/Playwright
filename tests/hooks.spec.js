//Se importan las funciones de playwright test
import { test, expect } from '@playwright/test';
//BeforeAll
test.beforeAll(async () => {
    console.log('Esto es el BeforeAll, Se ejecuta una vez antes de todo el Test'
    );
});
//BeforeEach se ejecuta después de cada test, Sirve para tareas repetitivas, como por ejemplo navegar hacia una página web
test.beforeEach(async () => {
    console.log('Esto es el BeforeEach, Se ejecuta antes de cada test');
    await page.goto('https://www.t-evolvers.com/');
});
//AfterAll se ejecuta después de cada test, algo que se ejecuta una vez al final de todos los tests, como por ejemplo cerrar el navegador, limpiar el cache, limpiar el entorno, cerrar conexiones a bases de datos, etc.
test.afterAll(async () => {
    console.log('Esto es el AfterAll, Se ejecuta una vez después de todo el Test');
});

//AfterEach se ejecuta después de cada test, Sirve para tareas repetitivas, como forzar el cierre de un navegador o limpiar el cache
test.afterEach(async () => {
    console.log('Esto es el AfterEach, Se ejecuta después de cada test');
});

//Ejemplos practicos de los Hooks de Playwright
//Ejemplo de BeforeAll Validar Titulo
test('Validar Titulo', async ({page}) => {
    await expect(page).toHaveTitle('T-Evolvers - Transformamos el futuro de tu empresa');
});

//Ejemplo Imprimir titulo
test('Imprimir titulo', async({page}) => {
    const titulo = await page.title();
    console.log('Titulo de la página: ',titulo)
})