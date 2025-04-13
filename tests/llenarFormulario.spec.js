import { test, expect } from '@playwright/test';

test('Completar el formulario usando GetByRole', async ( { page } ) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByRole('textbox', { name: 'First Name' }).fill('Juan');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Pérez');
    await page.getByRole('textbox',{ name: 'name@example.com'}).fill('juanperez@test.qa');
    await page.getByRole('')
    await page.getByText('Male', {exact: true}).click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1234567890');
    await page.locator('#dateOfBirthInput').fill('15 Jul 1990');
    await page.locator('#subjectsInput').fill('Mat');
    await page.getByText('Maths', {exact: true}).click();
    await page.getByText('Reading', {exact: true}).click();
    await page.getByText('Music', {exact: true}).click();
    await page.getByRole('textbox', { name: 'Select picture'}).setInputFiles('resources/google.png');
    await page.getByRole('textbox', { name: 'Current Address' }).fill('Calle Falsa 123');
    await page.locator('#state').click();
    await page.getByText('NCR', {exact: true}).click();
    await page.locator('#city').click();
    await page.getByText('Delhi', {exact: true}).click();
    await page.locator('#submit').click();
    await expect(page.locator('.modal-content')).toBeVisible(); 

})