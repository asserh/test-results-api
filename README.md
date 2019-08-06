# Kebne Test Reports

Stores allure test results and serves aggregated test reports upon request.

## Building project

### Requirements
* NodeJS
* Typescript
* yarn

Make sure you have those installed on your machine, run `yarn install` in the project directory to fetch dependencies.

### Scripts
`yarn dev` - Starts server locally for testing

`yarn test` - Run unit and acceptance tests

### AWS

To run the service you'll to set up a [S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#create-bucket-intro) and a [user with permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) to access that bucket. You can define AWS keys either in the config files themselves or as an environment variable on your machine (eg AWS_ACCESS_KEY_ID = myaccesskeyid).


### Running in docker

`docker build -t test-results .`

`docker run -d -n test-results-api -p 8080:80 test-results`

# API

## `POST /results`
Endpoint accepts ZIP files. The zip file will be unpacked and, if the files are allure test results, stored in an Amazon S3 bucket. 

Ensure that your request has headers `Content-Type: application/zip` or the server will automatically return an error.

### Example request:
`curl --request POST --header "Content-Type: application/zip" --data-binary "@{path-to-zip-file}" http://test.kebne.se/results`

### Example response:

No response body, if successful the server returns status code
`202 OK`

In case of error, the server returns status code `422`.
