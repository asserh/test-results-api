import { Handler } from './handler';
import { Storage } from '../storage';
import { ServerRoute, Lifecycle, Request, ResponseToolkit } from '@hapi/hapi';

export class ResultHandler extends Handler {
  private storage: Storage;
  public route: ServerRoute = {
    path: '/results',
    method: 'POST',
    handler: this.handler,
  }
 
  public constructor(storage: Storage) {
    super();
    this.storage = storage;
  }

  protected async handler(): Promise<string> {
    return 'ok';
  }
}

export const getResults: ServerRoute = {
  path: '/results',
  method: 'POST',
};
