import S3 from 'aws-sdk/clients/s3';
import { AWSConfig } from './aws-util/aws-config';

export class Storage extends S3 {
  constructor(config: AWSConfig = new AWSConfig()) {
      super(config);
  }
}