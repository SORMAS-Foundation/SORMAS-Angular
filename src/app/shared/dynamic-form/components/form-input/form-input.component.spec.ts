/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { FormInputComponent } from './form-input.component';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
