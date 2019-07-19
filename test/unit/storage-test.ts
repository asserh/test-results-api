import 'should';
import 'mocha';
import { Storage, ObjectRequest } from '../../src/storage';
import config from 'config';
import should from 'should';

describe('storage-test.ts', () => {
  describe('S3 Storage', () => {
    let storage: Storage;
    const testRunDir: ObjectRequest = {
      Bucket: config.get('aws.bucket'),
      Key: `run-${new Date().getTime()}/`,
    };

    before('Init storage, create test directory', async () => {
      storage = new Storage();
  
      try { 
        await storage.putObject(testRunDir).promise();
      } catch(err) {
        throw err;
      }
    });

    after('Delete test directory', async () => {
      try {
        await storage.deleteObject(testRunDir).promise();
      } catch (err) {
        throw err;
      }
    });
    
    describe('S3 Objects', () => {
      let testObject: ObjectRequest = {
        Bucket: testRunDir.Bucket,
        Key: 'test_object.xml',
      };

      it('should create an object in the test dir', async () => {
        await storage.putObject(testObject).promise()
          .catch((err) => { throw err; })

        const res = await storage.getObject(testObject).promise()
          .catch((err) => { should.fail(err, {} , 'Object could not be found' ) });
      });
  
      it('should delete an object', async () => {
        await storage.deleteObject(testObject).promise()
          .catch((err) => { throw err; })

        const res = await storage.getObject(testObject).promise()
          .catch((err) => { should.fail(err, {} , 'Object could not be found' ) });
      });
    });
    
  });
});