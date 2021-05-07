import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { CaseTherapyComponent } from './case-therapy.component';

describe('CaseTherapyComponent', () => {
  let component: CaseTherapyComponent;
  let fixture: ComponentFixture<CaseTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseTherapyComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
