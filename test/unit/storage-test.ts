import 'should';
import 'mocha';
import { 
  Storage,
  PutObjectRequest,
  DeleteObjectRequest } from '../../src/storage';
  import config from 'config';

describe.only('storage-test.ts', () => {
  describe('S3 Storage', () => {
    let storage: Storage;
    const testRunDir: PutObjectRequest | DeleteObjectRequest = {
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
      let testObject: PutObjectRequest | DeleteObjectRequest = {
        Bucket: testRunDir.Bucket,
        Key: 'test_object.xml',
      };

      it('should create an object', async () => {
        try {
          const res = storage.putObject(testObject).promise();
          res.should.be.resolved();
        } catch (err) {
          err.should.not.exist();
          throw err;
        }
      });
  
      it('should delete an object', () => {
        try {
          const res = storage.deleteObject(testObject).promise();
          res.should.be.resolved();
        } catch (err) {
          err.should.not.exist();
          throw err;
        }
      });
    });
    
  });
});