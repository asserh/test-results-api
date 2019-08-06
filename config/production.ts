module.exports = {
  port: 80,
  host: '0.0.0.0',
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'stored-results',
    endpoint: 's3.eu-north-1.amazonaws.com/test-results-b',
  }
};
