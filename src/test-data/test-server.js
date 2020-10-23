import { rest } from 'msw';
import { setupServer } from 'msw/node';

let server;

const setServer = async (url, status, message='') => {
  if(server) {
    server.close();
    server.resetHandlers();
  }
  server = await setupServer(
    rest.get(url, (req, res, ctx) => {
      return res(
        ctx.status(status),
        ctx.json(message)
      )
    })
  );
}
  

beforeAll(() => server ? server.listen() : null);
afterAll(() => server ? server.close() : null);
afterEach(() => server ? server.resetHandlers() : null);

export { setServer, server, rest }
