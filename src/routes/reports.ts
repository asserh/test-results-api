import { Handler } from './common/handler';
import config from 'config';
import { exec as _exec } from 'child_process';
import util from 'util';
import Boom from '@hapi/boom';
import { currentMonth, currentYear } from './common/time-util';
import { 
  ServerRoute,
  Request,
  ResponseToolkit,
  ResponseObject,
} from '@hapi/hapi';
const exec = util.promisify(_exec);

export class ReportsHandler extends Handler {
  private storage: string = config.get('localStorage');
  public route: ServerRoute = {
    path: '/reports',
    method: 'GET',
  };
 
  public constructor() {
    super();
    this.route.handler = this.handler;
  }

  protected handler = async(request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const testResultsDir = `${this.storage}/${currentYear()}/${currentMonth()}`;
      const commandToExecute =
        `allure generate ${testResultsDir} -o ${this.storage}/latest`;

      const { stdout } = await exec(commandToExecute);
      console.log(stdout);

      return h.response().code(200);
    } catch (err) {
      throw new Boom(err, { statusCode: 418 });
    }
  }
}
