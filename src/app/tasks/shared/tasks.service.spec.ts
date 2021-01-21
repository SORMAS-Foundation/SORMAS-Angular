/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksService } from './tasks.service';

describe('Service: Tasks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService],
    });
  });

  it('should ...', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
