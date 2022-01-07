/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { CaseImportComponent } from './case-import.component';

describe('CaseImportComponent', () => {
  let component: CaseImportComponent;
  let fixture: ComponentFixture<CaseImportComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CaseImportComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
