/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Handler } from './handler';
import { Storage } from '../storage';
import JSZip from 'jszip';
import moment from 'moment';
import config from 'config';
import { 
  ServerRoute,
  Request,
  ResponseToolkit,
  ResponseObject,
} from '@hapi/hapi';

export class ResultsHandler extends Handler {
  private storage: Storage;
  public route: ServerRoute = {
    path: '/results',
    method: 'POST',
    options: {
      payload: {
        defaultContentType: 'application/zip',
        maxBytes: 200_000_000,
        parse: false,
      },
    },
  };
 
  public constructor(storage: Storage) {
    super();
    this.storage = storage;
    this.route.handler = this.handler;
    
  }

  protected handler = async(request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const zip = await new JSZip().loadAsync(request.payload as Uint8Array);
      const bucket = config.get('aws.bucket') as string;
      const saveDirectory = this.currentMonthAndYear();
      const files: string[] = [];
      
      zip.forEach((relativePath): void => {
        files.push(relativePath);
      });

      const promises = files.map(async(filePath): Promise<void> => {
        const binaryString = await zip.file(filePath).async('binarystring');

        const params = {
          Body: binaryString,
          Bucket: bucket,
          Key: saveDirectory + filePath,
        };

        await this.storage.putObject(params).promise();
      });

      await Promise.all(promises);

      return h.response().code(202);
    } catch (err) {
      console.log(err);
      return h.response().code(422);
    }
  }

  private currentMonthAndYear(): string {
    const time = moment.utc();
    return `${time.year()}/${time.month()}/`;
  }
}
