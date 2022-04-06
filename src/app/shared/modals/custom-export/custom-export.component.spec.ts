/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { CustomExportComponent } from './custom-export.component';

describe('CustomExportComponent', () => {
  let component: CustomExportComponent;
  let fixture: ComponentFixture<CustomExportComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CustomExportComponent],
      imports: [TranslateModule.forRoot(), MaterialModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
