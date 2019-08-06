import 'should';
import 'mocha';
import { Server } from '../../src/server';
import { post } from 'request-promise-native';
import config from 'config';

describe('api-test.ts', () => {

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

      describe('if Content-Type is not application/json', () => {
        it('should reject with an error', async () => {
          const options = {
            headers: { 'Content-Type': 'application/json'},
            resolveWithFullResponse: true
          };
          await post(url, options)
            .catch((err) => { err.statusCode.should.eql(422); });
        });
      });

    });
  });
  
});
