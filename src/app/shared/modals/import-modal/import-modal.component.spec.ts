/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';
import { ImportModalComponent } from './import-modal.component';

describe('ImportModalComponent', () => {
  let component: ImportModalComponent;
  let fixture: ComponentFixture<ImportModalComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ImportModalComponent],
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
