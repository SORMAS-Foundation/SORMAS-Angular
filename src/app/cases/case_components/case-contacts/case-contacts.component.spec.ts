import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { CaseContactsComponent } from './case-contacts.component';

describe('CaseContactsComponent', () => {
  let component: CaseContactsComponent;
  let fixture: ComponentFixture<CaseContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseContactsComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
