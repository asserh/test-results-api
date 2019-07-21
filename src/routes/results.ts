import { Handler } from './handler';
import { Storage } from '../storage';
import cheerio from 'cheerio';

import { 
  ServerRoute,
  Lifecycle,
  Request,
  ResponseToolkit
} from '@hapi/hapi';

export class ResultHandler extends Handler {
  private storage?: Storage;
  public route: ServerRoute = {
    path: '/results',
    method: 'POST',
    options: {
      handler: this.handler,
      payload: {
        defaultContentType: 'text/xml'
      },
    },
  };
 
  public constructor(storage?: Storage) {
    super();
    this.storage = storage;
  }

  protected async handler(request: Request, h: ResponseToolkit): Promise<any> {
    const payload: string = request.payload as string;
    const xml = cheerio.load(payload, { xmlMode: true });

    if(!xml || xml('id').text() !== 'allure') {
      return h.response().code(403);
    }
    
    return h.response().code(202);
  }
}

export const getResults: ServerRoute = {
  path: '/results',
  method: 'POST',
};
