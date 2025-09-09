describe.skip('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have logo image', async () => {
    await expect(element(by.id('logo-image'))).toBeVisible();
  });

});
