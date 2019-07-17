import { Server as HapiServer, ServerRoute } from '@hapi/hapi';
import { Routes } from './routes/routes';
import config from 'config';

class Config {
  port: number = config.get('port');
  host: string = config.get('host');
}

export class Server extends HapiServer {
  private routes: ServerRoute[] = Routes;

  constructor(config: Config = new Config()) {
    super(config);
    this.route(this.routes);
  }

  async runWithPlugins() {
    await super.register([]);
    await super.start();
  }
}
