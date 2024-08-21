const { fetchData } = require('./jestmock');

beforeEach(() => {
    jest.clearAllMocks();

    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ data: 'mocked data' }),
        })
    );
});


test('fetches data successfully', async () => {
    const data = await fetchData('https://api.example.com/data');
    expect(data).toEqual({ data: 'mocked data' });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
});


test('fetches data with error', async () => {

    // Test error case
    global.fetch.mockImplementationOnce(() =>
        Promise.reject(new Error('Failed to fetch'))
    );
    try {
        await fetchData('https://api.example.com/data');
    } catch (error) {
        expect(error.message).toBe('Failed to fetch');
    }
    expect(fetch).toHaveBeenCalledTimes(1);
});