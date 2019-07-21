import { ServerRoute } from '@hapi/hapi';
import { Handler } from './routes/handler';
import { ResultHandler } from './routes/results';
import { Storage } from './storage';

export class ApiRoutes {
  private storage = new Storage();
  private resultHandler: Handler;
  public list: ServerRoute[];

  public constructor() {
    this.resultHandler = new ResultHandler(this.storage);
    this.list = [ this.resultHandler.route ];
  }
}
