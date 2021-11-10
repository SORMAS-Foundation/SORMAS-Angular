import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { FacilityFiltersComponent } from './facility-filters.component';

describe('FacilityFiltersComponent', () => {
  let component: FacilityFiltersComponent;
  let fixture: ComponentFixture<FacilityFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacilityFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
