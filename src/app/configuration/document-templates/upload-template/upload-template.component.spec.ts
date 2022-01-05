/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';
import { UploadTemplateComponent } from './upload-template.component';

describe('UploadTemplateComponent', () => {
  let component: UploadTemplateComponent;
  let fixture: ComponentFixture<UploadTemplateComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UploadTemplateComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
