describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say hello', async () => {
    await expect(element(by.text('Hello, React Native!'))).toBeVisible();
  });
});
