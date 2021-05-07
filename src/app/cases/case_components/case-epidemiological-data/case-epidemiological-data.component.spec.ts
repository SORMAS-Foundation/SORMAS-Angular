import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { CaseEpidemiologicalDataComponent } from './case-epidemiological-data.component';

describe('CaseEpidemiologicalDataComponent', () => {
  let component: CaseEpidemiologicalDataComponent;
  let fixture: ComponentFixture<CaseEpidemiologicalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseEpidemiologicalDataComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEpidemiologicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
