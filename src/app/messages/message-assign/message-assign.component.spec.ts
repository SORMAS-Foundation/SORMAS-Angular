import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { MessageAssignComponent } from './message-assign.component';

describe('MessageAssignComponent', () => {
  let component: MessageAssignComponent;
  let fixture: ComponentFixture<MessageAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageAssignComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
