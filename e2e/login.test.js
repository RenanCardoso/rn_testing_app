describe('Login', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('entrar com sucesso', async () => {
        //1. Clicar no botão próximo da primeira tela
        await waitFor(element(by.text('Próximo')))
        .toBeVisible()
        .withTimeout(9000); // espera até 5 segundos
        await element(by.text('Próximo')).tap();

        //2. Clicar no botão próximo da segunda tela
        await element(by.text('Próximo')).tap();

        //3. Clicar no botão para Entrar
        await element(by.text('Entrar')).tap();

        //4. Preencher os campos de E-mail e Senha e clicar para Entrar
        await element(by.id('email')).typeText('teste@teste.com');
        await element(by.id('password')).typeText('123456');
        await element(by.text('Entrar')).tap();

        //5. Verificar se entrou no sistema com sucesso
        await expect(element(by.text('Teste Completo!'))).toBeVisible();
    });
});