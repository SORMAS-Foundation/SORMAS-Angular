/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsFiltersComponent } from './statistics-filters.component';

describe('StatisticsFiltersComponent', () => {
  let component: StatisticsFiltersComponent;
  let fixture: ComponentFixture<StatisticsFiltersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StatisticsFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
