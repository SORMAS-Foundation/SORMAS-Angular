import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { CaseFiltersComponent } from './case-filters.component';

describe('CaseFiltersComponent', () => {
  let component: CaseFiltersComponent;
  let fixture: ComponentFixture<CaseFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseFiltersComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
