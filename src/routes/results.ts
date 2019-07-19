import { ServerRoute } from '@hapi/hapi';

export const getResults: ServerRoute = {
  path: '/results',
  method: 'POST',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  handler: () => {
    return 'OK';
  },
};
