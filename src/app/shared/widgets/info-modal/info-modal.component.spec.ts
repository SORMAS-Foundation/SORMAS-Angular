/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';
import { InfoModalComponent } from './info-modal.component';

describe('InfoModalComponent', () => {
  let component: InfoModalComponent;
  let fixture: ComponentFixture<InfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoModalComponent],
      imports: [TranslateModule.forRoot(), MaterialModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
