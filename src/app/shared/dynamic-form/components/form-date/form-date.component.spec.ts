/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { FormDateComponent } from './form-date.component';

describe('FormDateComponent', () => {
  let component: FormDateComponent;
  let fixture: ComponentFixture<FormDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDateComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
