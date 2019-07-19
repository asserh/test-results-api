import { Lifecycle, ServerRoute as Route } from '@hapi/hapi';
type hej = Lifecycle.Method;
export abstract class Handler {
  public abstract route: Route;
  protected abstract handler: string;
}

export { hej };

