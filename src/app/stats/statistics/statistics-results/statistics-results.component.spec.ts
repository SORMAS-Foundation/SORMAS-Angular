/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsResultsComponent } from './statistics-results.component';

describe('StatisticsResultsComponent', () => {
  let component: StatisticsResultsComponent;
  let fixture: ComponentFixture<StatisticsResultsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StatisticsResultsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
