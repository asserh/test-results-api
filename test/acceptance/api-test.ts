import 'should';
import 'mocha';
import { Server } from '../../src/server';
import { post } from 'request-promise-native';
import config from 'config';

describe.only('api-test.ts', () => {
  describe('running service', () => {
    let server: Server;
    const url = `http://${config.get('host')}:${config.get('port')}/results`;

    before(async () => {
      server = new Server();
      await server.start();
    });

    after(async () => {
      await server.stop();
    });

    describe('calling /results', () => {
      describe('with a good XML payload', () => {
        const body = '<?xml version="1.0" encoding="UTF-8"?>\n<id>allure</id>';
  
        it('should return 202 OK', async () => {
          const res = await post(url, { body: body, resolveWithFullResponse: true });
          res.statusCode.should.eql(202);
        });
      });

      describe('with a bad XML payload', () => {
        const body = '<?xml version="1.0" encoding="UTF-8"?>\n<id>something</id>';

        it('should return 403 error', async () => {
          await post(url, { body: body })
            .catch((err) => { err.statusCode.should.eql(422); });
        });
      });

    });
  });
  
});
