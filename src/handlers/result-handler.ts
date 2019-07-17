import * as Hapi from '@hapi/hapi';
// import storage here

export default class ResultHandler {
  // storage: S3Storage = new S3Storage();
  public async saveReport(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    return console.log('hello world');
  }
}