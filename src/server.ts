import { Server as HapiServer } from '@hapi/hapi';
import { ApiRoutes } from './api';
import config from 'config';

class Config {
  public port: number = config.get('port');
  public host: string = config.get('host');
}

export class Server extends HapiServer {
  private _routes: ApiRoutes;

  public constructor(
    config: Config = new Config(),
    routes: ApiRoutes = new ApiRoutes(),
  ) {
    super(config);
    this._routes = routes;
    this.route(this._routes.list);
  }
}
