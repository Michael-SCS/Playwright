import { test, expect } from '../fixture/loginSaucedDemoFixture';

test('Validar acceso a saucedDEmo y el inventario', async ({ saucedLogin }) => {
    //VALIDAMOS QUE NOS ENCONTREMOS EN LA URL CORRECTA
    await expect(saucedLogin).toHaveURL(/inventory/);
    
    //VALIDAMOS QUE LOS PRODUCTOS SEAN VISIBLES
    const inventario = saucedLogin.locator('.inventory_list');
    await expect(inventario).toBeVisible();
});