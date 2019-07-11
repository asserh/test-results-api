import * as hapi from '@hapi/hapi';

interface Config {
  port: number,
  host: string,
}

class Service {
  server: any;
  config: Config;

  constructor(config: Config) {
    this.config = config;
    this.server = hapi.Server(this.config);
    this.setUpRoutes();
  }
  private setUpRoutes() {
    return 'hello';
  }
  start() {
    return this.server.start();
  }
}
