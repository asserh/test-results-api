import 'should';
import 'mocha';
import { Storage } from '../../src/storage';
import config from 'config';

describe.only('storage-test.ts', () => {
  describe('Storage', async () => {
    let storage: Storage;

    before(() => {
      storage = new Storage();
    });

    it('should list buckets', async () => {
      const buckets = await storage.listBuckets();
      console.log(buckets);
      buckets.should.not.be.null;
    });
  });
});