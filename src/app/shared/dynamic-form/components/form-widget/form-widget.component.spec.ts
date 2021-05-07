/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { NewEpidNumberComponent } from '../../../../cases/case_components/new-epid-number/new-epid-number.component';
import { FORM_DATA_WIDGET } from '../../../../_constants/form-data';

import { FormWidgetComponent } from './form-widget.component';

describe('FormWidgetComponent', () => {
  let component: FormWidgetComponent;
  let fixture: ComponentFixture<FormWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWidgetComponent, NewEpidNumberComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWidgetComponent);
    component = fixture.componentInstance;
    component.config = { ...FORM_DATA_WIDGET };
    component.config.widget = 'app-new-epid-number';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
