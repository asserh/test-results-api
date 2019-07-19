import { Server as HapiServer, ServerRoute } from '@hapi/hapi';
import { Routes } from './routes/routes';
import config from 'config';

class Config {
  public port: number = config.get('port');
  public host: string = config.get('host');
}

export class Server extends HapiServer {
  private readonly routes: ServerRoute[] = Routes;

  public constructor(config: Config = new Config()) {
    super(config);
    this.route(this.routes);
  }

  public async runWithPlugins(): Promise<void> {
    await this.register([]);
    await this.start();
  }
}
