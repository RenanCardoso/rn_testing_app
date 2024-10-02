import { faker } from '@faker-js/faker';
describe('Register', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('Criar nova conta com sucesso', async () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        const person = {
            firstName: firstName,
            lastName: lastName,
            email: faker.internet.email({ firstName: firstName, lastName: lastName }).toLowerCase(),
            password: faker.internet.password(),
        };

        //1. Clicar no botão próximo da primeira tela
        await waitFor(element(by.text('Próximo')))
            .toBeVisible()
            .withTimeout(9000); // espera até 5 segundos
        await element(by.text('Próximo')).tap();

        //2. Clicar no botão próximo da segunda tela
        await element(by.text('Próximo')).tap();

        //3. Clicar no botão para Entrar
        await element(by.text('Inscrever-se')).tap();

        //4. Preencher os campos de E-mail e Senha e clicar para Entrar
        await element(by.id('first_name')).typeText(person.firstName);
        await element(by.id('last_name')).typeText(person.lastName);
        await element(by.id('email')).typeText(person.email);
        await element(by.id('password')).typeText(person.password);
        await element(by.id('Register')).tap();

        //5. Verificar se entrou no sistema com sucesso
        await expect(element(by.text('Teste Completo!'))).toBeVisible();
    });
});