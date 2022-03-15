import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { LabMessageAssignComponent } from './lab-message-assign.component';

describe('LabMessageAssignComponent', () => {
  let component: LabMessageAssignComponent;
  let fixture: ComponentFixture<LabMessageAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabMessageAssignComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMessageAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
