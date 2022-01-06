/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CountryFiltersComponent } from './country-filters.component';

describe('CountryFiltersComponent', () => {
  let component: CountryFiltersComponent;
  let fixture: ComponentFixture<CountryFiltersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CountryFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
