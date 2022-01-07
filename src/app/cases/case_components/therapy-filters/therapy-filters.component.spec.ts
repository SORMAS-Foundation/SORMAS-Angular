/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TherapyFiltersComponent } from './therapy-filters.component';

describe('TherapyFiltersComponent', () => {
  let component: TherapyFiltersComponent;
  let fixture: ComponentFixture<TherapyFiltersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TherapyFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
