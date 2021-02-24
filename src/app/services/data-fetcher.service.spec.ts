import { TestBed } from '@angular/core/testing';

import { DataFetcherService } from './data-fetcher.service';

type TestDto = {
  id: number;
  name: string;
};

describe('DataFetcherService', () => {
  let service: DataFetcherService<TestDto>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
