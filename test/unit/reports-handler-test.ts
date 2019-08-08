import 'should';
import 'mocha';
import sinon from 'sinon';
import config from 'config';
import { ServerInjectOptions } from '@hapi/hapi';
import { Server } from '../../src/server';
import { Storage } from '../../src/storage';
import { ApiRoutes } from '../../src/api';

const url = `http://${config.get('host')}:${config.get('port')}/reports`;

describe('reports-handler-test.ts', () =>  {
  let storage: Storage;
  let server: Server;
  let apiRoutes: ApiRoutes;
  let serverInjectOptions: ServerInjectOptions;

  describe('Calling report handler', () => {
    let response;
    
    before('New server instance', () => {
      storage = new Storage();
      apiRoutes = new ApiRoutes(storage);
      server = new Server(undefined, apiRoutes);
    });

    beforeEach('Inject server request', async () => {
      const options: ServerInjectOptions = {
        method: 'GET',
        url: url,
      };

      response = await server.inject(options).catch((err) => { throw err; });
    });

    
  });
});
