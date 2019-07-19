import { Config } from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk/lib/config';
import { AWSCredentials } from './aws-credentials';
import config from 'config';

class Options implements ConfigurationOptions {
  public credentials: AWSCredentials = new AWSCredentials();
  public region: string = config.get('aws.region');
  public endpoint: string = config.get('aws.endpoint');
}

export class AWSConfig extends Config {
  public constructor(options: Options = new Options()) {
    super(options);
  }
}
