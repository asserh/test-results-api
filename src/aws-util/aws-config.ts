import { Credentials, Config } from 'aws-sdk';
import config from 'config';

class AWSCredentials extends Credentials {
  constructor(options = {
    accessKeyId: config.get('aws.accessKeyId') as string,
    secretAccessKey: config.get('aws.secretAccessKey') as string,
  }) {
    super(options);
  }
}

class Options {
  credentials: AWSCredentials = new AWSCredentials();
  region: string = config.get('aws.region');
}

export class AWSConfig extends Config {
  constructor(options: Options = new Options()) {
    super(options);
  }
}