import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPointsFiltersComponent } from './entry-points-filters.component';

describe('PointsOfEntriesFiltersComponent', () => {
  let component: EntryPointsFiltersComponent;
  let fixture: ComponentFixture<EntryPointsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryPointsFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPointsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
