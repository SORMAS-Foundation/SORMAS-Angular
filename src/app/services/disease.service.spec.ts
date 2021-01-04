import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DiseaseService } from './disease.service';

describe('DiseaseServiceService', () => {
  let service: DiseaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DiseaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
