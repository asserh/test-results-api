import { ServerRoute } from '@hapi/hapi';

export const getResults: ServerRoute = {
  path: '/results',
  method: 'POST',
  handler: () => {
    return 'OK';
  },
}