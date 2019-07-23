import path from 'path';

module.exports = {
  port: undefined,
  host: undefined,
  storage: undefined,
  projectDir: path.resolve(__dirname, '../'),
  aws: {
    region: 'eu-north-1',
    accessKeyId: undefined,
    secretAccessKey: undefined,
    endpoint: 's3.eu-north-1.amazonaws.com', 
    s3BucketEndpoint: undefined,
  }
};
