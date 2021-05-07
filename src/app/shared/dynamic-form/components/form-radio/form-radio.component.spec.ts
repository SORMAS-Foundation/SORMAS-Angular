/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { FormRadioComponent } from './form-radio.component';

describe('FormRadioComponent', () => {
  let component: FormRadioComponent;
  let fixture: ComponentFixture<FormRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormRadioComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
