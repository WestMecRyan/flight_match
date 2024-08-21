const { createPromiseTest } = require('./promises3');


beforeEach(() => {
    jest.clearAllMocks();
});

test('promise resolves successfully', async () => {
    const promiseTest = createPromiseTest();
    await expect(promiseTest).resolves.toBe("Everything is good.");
});

test('promise rejects with an error', async () => {
    const promiseTest = createPromiseTest(true);
    await expect(promiseTest).rejects.toBe('Intentional failure.');
});
