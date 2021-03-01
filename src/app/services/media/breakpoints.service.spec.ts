/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreakpointsService } from './breakpoints.service';

describe('Service: Breakpoints', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakpointsService],
    });
  });

  it('should ...', inject([BreakpointsService], (service: BreakpointsService) => {
    expect(service).toBeTruthy();
  }));
});
