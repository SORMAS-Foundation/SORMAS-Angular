/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { DistrictFiltersComponent } from './district-filters.component';

describe('DistrictFiltersComponent', () => {
  let component: DistrictFiltersComponent;
  let fixture: ComponentFixture<DistrictFiltersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DistrictFiltersComponent],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
