import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { CaseFollowUpComponent } from './case-follow-up.component';

describe('CaseFollowUpComponent', () => {
  let component: CaseFollowUpComponent;
  let fixture: ComponentFixture<CaseFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseFollowUpComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
