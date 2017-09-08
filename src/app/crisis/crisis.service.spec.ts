import { CrisisService, Crisis } from './crisis.service';

describe('Test crisis service', () => {

  const crisisService = new CrisisService();

  beforeEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
  });

  it('crisisService.test_var is ok!', () => expect(crisisService.test_var).toBe('test'));

  it('crisisService.getCrises is ok!', (done) => {
    crisisService.getCrises().then((result) => {
      const checkerArray = Array.isArray(result);
      expect(checkerArray).toBe(true);
      done();
    });
  });

  it('crisisService.getCrisis 1 is ok!', (done) => {
    crisisService.getCrisis(1).then((crisis) => {
      const result = (crisis instanceof Crisis);
      expect(result).toBe(true);
      done();
    });
  });

  it('crisisService.getCrisis 3 is ok!', (done) => {
    crisisService.getCrisis(3).then((crisis) => {
      const result = (crisis instanceof Crisis);
      expect(result).toBe(true);
      done();
    });
  });

});
