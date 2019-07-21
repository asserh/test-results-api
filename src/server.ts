import { Server as HapiServer, ServerRoute } from '@hapi/hapi';
import { ApiRoutes } from './api';
import config from 'config';

class Config {
  public port: number = config.get('port');
  public host: string = config.get('host');
}

export class Server extends HapiServer {
  private apiRoutes: ApiRoutes = new ApiRoutes();

  public constructor(config: Config = new Config()) {
    super(config);
    this.route(this.apiRoutes.list);
  }

  public async runWithPlugins(): Promise<void> {
    await this.register([]);
    await this.start();
  }
}
