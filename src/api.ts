import { ServerRoute } from '@hapi/hapi';
import { Handler } from './routes/handler';
import { ResultsHandler } from './routes/results';
import { Storage } from './storage';

export class ApiRoutes {
  private storage: Storage;
  private resultsHandler: Handler;
  public list: ServerRoute[];

  public constructor(storage = new Storage()) {
    this.storage = storage;
    this.resultsHandler = new ResultsHandler(this.storage);
    this.list = [ this.resultsHandler.route ];
  }
}
