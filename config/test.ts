module.exports = {
  port: 3000,
  host: 'localhost',
  aws: {
    bucket: 'test_runs',
    endpoint: process.env.AWS_ENDPOINT || 's3.eu-north-1.amazonaws.com/test-results-b',
  }
};
