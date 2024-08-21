import { setupServer } from 'msw/node';
import { handlers } from './msw.js';

export const server = setupServer(...handlers);

// jest.setup.js
import { server } from './src/mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios).
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// fetchData.test.js
import { fetchData } from './fetchData';

test('fetches data successfully', async () => {
    const data = await fetchData('https://api.example.com/data');
    expect(data).toEqual({ data: 'mocked data' });
});

test('fetches data with error', async () => {
    server.use(
        rest.get('https://api.example.com/data', (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );

    try {
        await fetchData('https://api.example.com/data');
    } catch (error) {
        expect(error.message).toBe('Network response was not ok');
    }
});