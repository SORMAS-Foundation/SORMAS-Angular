import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { AddCaseLabelComponent } from './add-case-label.component';

describe('AddCaseLabelComponent', () => {
  let component: AddCaseLabelComponent;
  let fixture: ComponentFixture<AddCaseLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCaseLabelComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaseLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
