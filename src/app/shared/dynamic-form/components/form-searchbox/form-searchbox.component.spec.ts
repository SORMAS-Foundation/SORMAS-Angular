/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { FormSearchboxComponent } from './form-searchbox.component';

describe('FormSearchboxComponent', () => {
  let component: FormSearchboxComponent;
  let fixture: ComponentFixture<FormSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSearchboxComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
