/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { FormNumberComponent } from './form-number.component';

describe('FormInputComponent', () => {
  let component: FormNumberComponent;
  let fixture: ComponentFixture<FormNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNumberComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
