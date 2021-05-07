import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { CaseHospitalizationComponent } from './case-hospitalization.component';

describe('CaseHospitalizationComponent', () => {
  let component: CaseHospitalizationComponent;
  let fixture: ComponentFixture<CaseHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseHospitalizationComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
