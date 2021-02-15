import { CaseControllerService } from 'api-client';

import { CaseService } from './case.service';

class CaseControllerServiceMock extends CaseControllerService {}

describe('CaseServiceService', () => {
  let service: CaseService;

  beforeEach(() => {
    // @ts-ignore
    const dep = new CaseControllerServiceMock(null, '', {});
    service = new CaseService(dep);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
