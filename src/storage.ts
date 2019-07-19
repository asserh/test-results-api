import S3 from 'aws-sdk/clients/s3';
import { AWSConfig } from './aws-util/aws-config';

export class Storage extends S3 {
  public constructor(awsConfig: AWSConfig = new AWSConfig()) {
    super(awsConfig);
  }
}

export interface ObjectRequest {
  Bucket: string;
  Key: string;
}

export { 
  PutObjectRequest,
  DeleteObjectRequest,
  GetObjectRequest
} from 'aws-sdk/clients/s3';
