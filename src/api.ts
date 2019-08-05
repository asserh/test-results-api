import { ServerRoute } from '@hapi/hapi';
import { Handler } from './routes/handler';
import { ResultsHandler } from './routes/results';
import { PingHandler } from './routes/ping';
import { Storage } from './storage';

export class ApiRoutes {
  private storage: Storage;
  private resultsHandler: Handler;
  private pingHandler: Handler;
  public list: ServerRoute[];

  public constructor(storage = new Storage()) {
    this.storage = storage;
    this.resultsHandler = new ResultsHandler(this.storage);
    this.pingHandler = new PingHandler();

    this.list = [ this.resultsHandler.route, this.pingHandler.route ];
  }
}
