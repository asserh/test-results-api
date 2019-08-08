import { Handler } from './handler';
import { Storage } from '../storage';
import moment from 'moment';
import config from 'config';
import { exec } from 'child_process';

import { 
  ServerRoute,
  Request,
  ResponseToolkit,
  ResponseObject,
} from '@hapi/hapi';

export class ResultsHandler extends Handler {
  private storage: Storage;
  public route: ServerRoute = {
    path: '/reports',
    method: 'GET',
  };
 
  public constructor(storage: Storage) {
    super();
    this.storage = storage;
    this.route.handler = this.handler;
  }

  protected handler = async(request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const gen = exec('allure ge');
    } catch (err) {
      console.log(err);
      return h.response().code(422);
    }
  }
}
