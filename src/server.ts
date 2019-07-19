import { Server as HapiServer, ServerRoute } from '@hapi/hapi';
import { Routes } from './routes/routes';
import config from 'config';

class Config {
  public port: number = config.get('port');
  public host: string = config.get('host');
}

export class Server extends HapiServer {
  private readonly routes: ServerRoute[] = Routes;

  public constructor(readonly config: Config = new Config()) {
    super(config);
    super.route(this.routes);
  }

  public async runWithPlugins(): Promise<void> {
    await super.register([]);
    await super.start();
  }
}
