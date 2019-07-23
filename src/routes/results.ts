import { Handler } from './handler';
import { Storage } from '../storage';
import cheerio from 'cheerio';

import { 
  ServerRoute,
  Request,
  ResponseToolkit
} from '@hapi/hapi';

export class ResultHandler extends Handler {
  private storage?: Storage;
  public route: ServerRoute = {
    path: '/results',
    method: 'POST',
    options: {
      payload: {
        defaultContentType: 'text/xml'
      },
    },
  };
 
  public constructor(storage?: Storage) {
    super();
    this.storage = storage;
    this.route.handler = this.handler;
    
  }

  protected handler = async function(request: Request, h: ResponseToolkit) {
    const payload: string = request.payload as string;
    const xml = cheerio.load(payload, { xmlMode: true });

    if(!xml || xml('id').text() !== 'allure') {
      return h.response().code(422);
    }
    
    return h.response().code(202);
  }
}

export const getResults: ServerRoute = {
  path: '/results',
  method: 'POST',
};
