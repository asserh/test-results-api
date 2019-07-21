import { 
  Lifecycle,
  ResponseToolkit,
  Request,
  ServerRoute as Route,
} from '@hapi/hapi';

export abstract class Handler {
  public abstract route: Route;
  protected abstract async handler(
    request: Request,
    h: ResponseToolkit,
    err: Error): Promise<Lifecycle.ReturnValue>;
}
