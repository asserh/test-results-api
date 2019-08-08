import { Handler } from './common/handler';
import { 
  ServerRoute,
  Request,
  ResponseToolkit,
} from '@hapi/hapi';

export class PingHandler extends Handler {
  public route: ServerRoute = {
    path: '/ping',
    method: 'GET',
  };
 
  public constructor() {
    super();
    this.route.handler = this.handler;
    
  }

  protected handler = async(request: Request, h: ResponseToolkit): Promise<string> => {
    return 'ok';
  }
}
