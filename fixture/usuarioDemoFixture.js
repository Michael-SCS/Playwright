import {test as base, expect} from '@playwright/test';

//Exportamos expect para poder usarlo en los archivos de prueba
export {expect};

//extender el objeto base para incluir un nuevo fixture "UsuarioDemo"
export const test = base.extend({
    //Definir fixture
    usuarioDemo: async ({}, use) => {
        //Simular un usuario con nombre y rol
        const usuario = {
            nombre: 'Jose',
            rol: 'admin'
        };
        await use(usuario); //Pasar el usuario al test
    },
});