/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectComponent } from './form-select.component';

describe('FormSelectComponent', () => {
  let component: FormSelectComponent;
  let fixture: ComponentFixture<FormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
