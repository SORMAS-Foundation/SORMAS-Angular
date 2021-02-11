import { ContactControllerService } from 'api-client';

import { DiseaseService } from './disease.service';

class ContactControllerServiceMock extends ContactControllerService {}

describe('DiseaseServiceService', () => {
  let service: DiseaseService;

  beforeEach(() => {
    // @ts-ignore
    const dep = new ContactControllerServiceMock(null, '', {});
    service = new DiseaseService(dep);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
