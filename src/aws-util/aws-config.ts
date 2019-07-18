import { Config } from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk/lib/config';
import { AWSCredentials } from './aws-credentials';
import config from 'config';

class Options implements ConfigurationOptions {
  credentials: AWSCredentials = new AWSCredentials();
  region: string = config.get('aws.region');
  endpoint: string = config.get('aws.endpoint');
}

export class AWSConfig extends Config {
  constructor(options: Options = new Options()) {
    super(options);
  }
}