/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWidgetComponent } from './form-widget.component';

describe('FormNullComponent', () => {
  let component: FormWidgetComponent;
  let fixture: ComponentFixture<FormWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
