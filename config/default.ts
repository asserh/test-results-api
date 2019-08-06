import path from 'path';

module.exports = {
  port: undefined,
  host: undefined,
  projectDir: path.resolve(__dirname, '../'),
  aws: {
    region: 'eu-north-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_BUCKET || 'stored-results',
    endpoint: process.env.AWS_ENDPOINT || 's3.eu-north-1.amazonaws.com/test-results-b',
  }
};
