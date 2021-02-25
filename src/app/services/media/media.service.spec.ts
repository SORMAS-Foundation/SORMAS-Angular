/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaService } from './media.service';

describe('Service: Media', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaService],
    });
  });

  it('should ...', inject([MediaService], (service: MediaService) => {
    expect(service).toBeTruthy();
  }));
});
