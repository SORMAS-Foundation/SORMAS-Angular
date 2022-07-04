import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { FormEdittextareaComponent } from './form-edittextarea.component';

describe('FormEdittextareaComponent', () => {
  let component: FormEdittextareaComponent;
  let fixture: ComponentFixture<FormEdittextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEdittextareaComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEdittextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
