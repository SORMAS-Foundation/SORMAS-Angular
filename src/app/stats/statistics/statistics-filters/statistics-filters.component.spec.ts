/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { StatisticsFiltersComponent } from './statistics-filters.component';

describe('StatisticsFiltersComponent', () => {
  let component: StatisticsFiltersComponent;
  let fixture: ComponentFixture<StatisticsFiltersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StatisticsFiltersComponent],
      imports: [HttpClientTestingModule, MaterialModule, TranslateModule.forRoot()],
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
