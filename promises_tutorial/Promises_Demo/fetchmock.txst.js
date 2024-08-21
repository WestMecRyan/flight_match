// fetchData.test.js
import fetchMock from 'fetch-mock';
import { fetchData } from './fetchmock.js';

afterEach(() => {
    fetchMock.restore();
});

test('fetches data successfully', async () => {
    fetchMock.getOnce('https://api.example.com/data', {
        body: { data: 'mocked data' },
        headers: { 'content-type': 'application/json' },
    });

    const data = await fetchData('https://api.example.com/data');
    expect(data).toEqual({ data: 'mocked data' });
});

test('fetches data with error', async () => {
    fetchMock.getOnce('https://api.example.com/data', 500);

    try {
        await fetchData('https://api.example.com/data');
    } catch (error) {
        expect(error.message).toBe('Network response was not ok');
    }
});