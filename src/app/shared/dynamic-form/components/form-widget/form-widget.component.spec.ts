/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FORM_DATA_WIDGET } from '../../../../_constants/form-data';
import { NewEpidNumberComponent } from '../../../widgets/new-epid-number/new-epid-number.component';

import { FormWidgetComponent } from './form-widget.component';

describe('FormWidgetComponent', () => {
  let component: FormWidgetComponent;
  let fixture: ComponentFixture<FormWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWidgetComponent, NewEpidNumberComponent],
      imports: [TranslateModule.forRoot()],
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
