import 'should';
import 'mocha';
import sinon, { SinonFake } from 'sinon';
import config from 'config';
import JSZip from 'jszip';
import { promises as fs } from 'fs';
import { ServerInjectOptions } from '@hapi/hapi';
import { Server } from '../../src/server';
import { Storage } from '../../src/storage';
import { ApiRoutes } from '../../src/api';
import moment from 'moment';

const fixturesDir = `${config.get('projectDir')}/test/fixtures`;
const url = `http://${config.get('host')}:${config.get('port')}/results`;

describe('results-handler-test.ts', () => {

  describe('ResultsHandler', () => {
    let zipBuffer: Buffer;
    let zip: JSZip;
    let server: Server;
    let apiRoutes: ApiRoutes;
    let storage: Storage;
    let fake: sinon.SinonSpy<any[], any>;

    describe('receives a new request:', () => {
      beforeEach('Instantiate server', async () => {
        storage = new Storage();
        apiRoutes = new ApiRoutes(storage);
        server = new Server(undefined, apiRoutes);
      });

      beforeEach('Mock storage', () => {
        fake = sinon.fake.returns({
          // Have to return object with a promise function
          // because that is what AWS SDK does with promises
          promise: () => {
            return {};
          },
        });
        sinon.replace(storage, 'putObject', fake);
      });

      afterEach('Restore fakes', () => {
        sinon.reset();
      });

      before('Create application/zip payload', async () => {
        zip = new JSZip();
    
        zip.file(
          'allure-test-report.json', 
          await fs.readFile(`${fixturesDir}/allure-test-report.json`)
        );

        zip.file('test-img.png', await fs.readFile(`${fixturesDir}/test.png`));

        zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
      });  

      describe('with a Buffer in the request payload', () => {
        describe('if it is a kbn_test ZIP file', () => {
          
          it('should unzip it and store 2 files in year/month bucket', async () => {
            const time = moment.utc();
            const yearMonthPath = `${time.year()}/${time.month()}`;

            const options: ServerInjectOptions = {
              method: 'POST',
              url: url,
              headers: { 'Content-Type': 'application/zip' },
              payload: zipBuffer,
            };
            await server.inject(options).catch((err) => { throw err; });

            sinon.assert.alwaysCalledWithMatch(fake, {
              Body: sinon.match.string,
              Bucket: yearMonthPath,
              Key: sinon.match.string,
            });

            sinon.assert.calledTwice(fake);
          });

          it('should return 202 OK', async () => {
            const options: ServerInjectOptions = {
              method: 'POST',
              url: url,
              headers: { 'Content-Type': 'application/zip' },
              payload: zipBuffer,
            };
            const res = await server.inject(options).catch((err) => { throw err; });
            res.statusCode.should.eql(202);
            res.statusMessage.should.eql('Accepted');
          });
        });
      });

    });
  });
});
