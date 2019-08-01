import S3 from 'aws-sdk/clients/s3';
import { PutObjectRequest } from 'aws-sdk/clients/mediastoredata';

export class TemporaryStorage extends S3 {
  public putObject(params: PutObjectRequest) {

  }
}
