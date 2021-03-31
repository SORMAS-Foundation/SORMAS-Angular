/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextareaComponent } from './form-textarea.component';

describe('FormTextareaComponent', () => {
  let component: FormTextareaComponent;
  let fixture: ComponentFixture<FormTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTextareaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
