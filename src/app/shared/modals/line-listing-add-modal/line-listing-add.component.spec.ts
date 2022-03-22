/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { LineListingAddComponent } from './line-listing-add.component';

describe('LineListingAddComponent', () => {
  let component: LineListingAddComponent;
  let fixture: ComponentFixture<LineListingAddComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LineListingAddComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
