import { test, expect } from '@playwright/test';

test('Completar y enviar formulario en Demo QA', async ( { page } ) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('#firstName').fill('Juan');
    await page.locator('#lastName').fill('Pérez');
    await page.locator('#userEmail').fill('juanperez@test.qa');
    await page.locator('label[for="gender-radio-1"]').click();
    await page.locator('#userNumber').fill('1234567890');
    await page.locator('#dateOfBirthInput').click();
    await page.selectOption('.react-datepicker__year-select', '1990'); // para identificar el elemento usamos la clase
    await page.selectOption('.react-datepicker__month-select', '7'); // para identificar el elemento usamos la clase
    await page.click('.react-datepicker__day--015');
    await page.locator('#subjectsInput').fill('Maths');
    await page.keyboard.press('Tab');
    const hobbies = page.locator('#hobbies-checkbox-1');
    await hobbies.scrollIntoViewIfNeeded();
    await page.locator('#hobbies-checkbox-1').click( { force: true });
    await page.setInputFiles('uploadPicture','resources/imagen.jpg');
    await page.fill('#currentAddress', 'Calle Falsa 123');
    await page.click('#submit');
    await expect(page.locator('.modal-content')).toBeVisible

    await page.waitForTimeout(5000); // Esperar 5 segundos
}
)
