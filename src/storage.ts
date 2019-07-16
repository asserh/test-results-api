import {
  S3,
  Config as AWSConfig } from 'aws-sdk';
import { AWSCredentials } from './util/aws-credentials';
import { ConfigurationOptions } from 'aws-sdk/lib/config';

export default class Storage {
  private store: S3;
  private aws_config: AWSConfig;
  private config_options: ConfigurationOptions;

  constructor() {
    this.config_options = { credentials: new AWSCredentials() };
    this.aws_config = new AWSConfig(this.config_options);
    this.store = new S3(this.aws_config);
  }

  // async putObject(data: any, filename: string) {
  //   await this.store.putObject('test')
  // }
}