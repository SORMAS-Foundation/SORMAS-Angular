/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { FormNullComponent } from './form-null.component';

describe('FormNullComponent', () => {
  let component: FormNullComponent;
  let fixture: ComponentFixture<FormNullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNullComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
