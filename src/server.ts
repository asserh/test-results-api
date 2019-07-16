import { Server } from '@hapi/hapi';
import { Routes } from './routes/routes';
import * as config from 'config';

class Config {
  port: number = config.get('port');
  host: string = config.get('host');
}

export class Service {
  server_config: Config = new Config();
  server: Server = new Server(this.server_config);
  routes = Routes;

  constructor() {
    this.setUpRoutes();
  }

  private setUpRoutes() {
    this.server.route(this.routes);
  }

  private async registerPlugins() {
    await this.server.register([]);
  }

  async start() {
    await this.registerPlugins();
    await this.server.start();
  }

  async stop() {
    await this.server.stop();
  }
}
