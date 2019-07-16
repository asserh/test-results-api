import { ServerRoute } from '@hapi/hapi';
import { getResults } from './results';

export const Routes: ServerRoute[] = [
  getResults,
];

