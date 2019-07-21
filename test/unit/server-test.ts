import 'should';
import * as should from 'should';
import 'mocha';
import { Server } from '../../src/server';
import { ApiRoutes } from '../../src/api';
import { Util } from '@hapi/hapi';
import config from 'config';

describe('server-test.js', function () {
  let server: Server;
  const routes = new ApiRoutes().list;

  const testConfiguration = {
    host: config.get('host'),
    port: config.get('port'),
  };

  beforeEach('create server', () => {
    server = new Server();
  });

  describe('instantiating a new server', () => {
    it('should set up routes', () => {
      for (const { method, path } of routes) {
        const match = server.match(method as Util.HTTP_METHODS_PARTIAL, path);

        if (!match) {
          should.fail(
            null,
            { method, path },
            `Could not find route: ${path}:${method}`
          );
        }
      }
    });

    it('should configure host:port', () => {
      const { port, host } = server.info;
      
      port.should.eql(testConfiguration.port);
      host.should.eql(testConfiguration.host);
    });
  });
});
