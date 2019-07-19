import 'should';
import 'mocha';
import { Server } from '../../src/server';
import { post } from 'request';

describe.only('api-test.ts', () => {
  describe('running service', () => {
    let server: Server;
    before(() => {
      server = new Server();
      server.start();
    });
    describe('calling /results', () => {
      it('should return ok', async () => {
        const res = await post('http://localhost:3000/results');
        res.body.should.eql('poo');
      });

    });
  });
  
});
