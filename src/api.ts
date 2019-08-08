import { ServerRoute } from '@hapi/hapi';
import { Handler } from './routes/common/handler';
import { ResultsHandler } from './routes/results';
import { ReportsHandler } from './routes/reports';
import { PingHandler } from './routes/ping';
import { Storage } from './storage';

export class ApiRoutes {
  private storage: Storage;
  private resultsHandler: Handler;
  private pingHandler: Handler;
  private reportsHandler: Handler;
  public list: ServerRoute[];

  public constructor(storage = new Storage()) {
    this.storage = storage;
    this.resultsHandler = new ResultsHandler(this.storage);
    this.reportsHandler = new ReportsHandler();
    this.pingHandler = new PingHandler();

    this.list = [ 
      this.resultsHandler.route,
      this.reportsHandler.route,
      this.pingHandler.route,
    ];
  }
}
