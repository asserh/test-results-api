import 'should';
import 'mocha';
import { Server } from '../../src/server';
import { post } from 'request-promise-native';

describe('api-test.ts', () => {
  describe('running service', () => {
    let server: Server;
    before(async () => {
      server = new Server();
      await server.start();
    });
    after(async () => {
      await server.stop();
    });
    describe('calling /results', () => {
      it('should return ok', async () => {
        const res = await post('http://localhost:3000/results').catch((err) => {console.log(err); });
        res.should.eql('ok');
      });

    });
  });
  
});
