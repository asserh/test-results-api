import { Handler, hej } from './handler';
import { Storage } from '../storage';

export class ResultHandler extends Handler {
  private storage: Storage = new Storage();
  public constructor() {
    super();
    this.route = {}
    this.handler = this.handle;
  }

  handler(request: Request, h: ResponseToolkit, err: Error): Promise<hej> {
    return 'hej';
  }
  }
}
export const getResults: ServerRoute = {
  path: '/results',
  method: 'POST',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  handler: new ResultHandler().storeXml(),
};
