import S3 from 'aws-sdk/clients/s3';
import { AWSConfig } from './aws-util/aws-config';

export class Storage extends S3 {
  constructor(awsConfig: AWSConfig = new AWSConfig()) {
      super(awsConfig);
  }
}

export { PutObjectRequest, DeleteObjectRequest } from 'aws-sdk/clients/s3';
