import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentFiltersComponent } from './continent-filters.component';

describe('ContinentFiltersComponent', () => {
  let component: ContinentFiltersComponent;
  let fixture: ComponentFixture<ContinentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
