import { rest } from 'msw';

export const handlers = [
    rest.get('https://api.example.com/data', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ data: 'mocked data' }));
    }),
];
