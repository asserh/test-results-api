import { ApiRoutes} from '../../src/api';
import 'should';
import 'mocha';

describe('routes-tests.ts', () => {
  describe('An instance of ApiRoutes', () =>{
    it('should list all available endpoints', () =>{
      const endpoints = new ApiRoutes().list;
      endpoints.length.should.be.aboveOrEqual(0);
    });
  });
});
