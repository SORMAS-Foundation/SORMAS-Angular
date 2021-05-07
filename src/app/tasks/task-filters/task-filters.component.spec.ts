import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { TaskFiltersComponent } from './task-filters.component';

describe('TaskFiltersComponent', () => {
  let component: TaskFiltersComponent;
  let fixture: ComponentFixture<TaskFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
