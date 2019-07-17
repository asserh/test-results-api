import { Credentials } from "aws-sdk";
import { CredentialsOptions } from "aws-sdk/lib/credentials";
import config from 'config';

export class AWSCredentials extends Credentials {
  constructor(opts: CredentialsOptions = config.get('aws')) {
    super(opts);
  }
}