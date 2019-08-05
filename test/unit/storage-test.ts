import 'should';
import 'mocha';
import { Storage, ObjectRequest } from '../../src/storage';
import config from 'config';
import should from 'should';

describe.only('storage-test.ts', () => {
  describe('S3 Storage', () => {
    let storage: Storage;
    const bucket = config.get('aws.bucket') as string;

    before(() => {
      console.log(config.get('aws.accessKeyId'));
      storage = new Storage();
    });
    
    describe('S3 Objects', () => {
      const testObject: ObjectRequest = {
        Bucket: bucket,
        Key: 'test/test_object.xml',
      };

      it('should create an object in the test dir', async () => {
        await storage.putObject(testObject).promise()
          .catch((err) => { throw err; });

        await storage.getObject(testObject).promise()
          .catch((err) => { should.fail(err, {} , 'Object could not be found' ); });
      });
  
      it('should delete an object', async () => {
        await storage.deleteObject(testObject).promise()
          .catch((err) => { throw err; });

        await storage.getObject(testObject).promise()
          .catch((err) => { should.ok(err, 'Object could not be found' ); });
      });
    });
    
  });
});
