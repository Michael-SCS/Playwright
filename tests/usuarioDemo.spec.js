import{test,expect} from '../fixture/usuarioDemoFixture';

//Creamos un test que recibe nuestro fixture "usuarioDemo"
test('Validar nombre de usuario', async ({usuarioDemo}) => {
    //Validar que el nombre del usuario es "Jose"
    expect(usuarioDemo.nombre).toBe('Jose');
});

test('Validar el rol de usuario', async ({usuarioDemo}) => {
    //Validar que el rol del usuario es "admin"
    expect(usuarioDemo.rol).toBe('admin');
});