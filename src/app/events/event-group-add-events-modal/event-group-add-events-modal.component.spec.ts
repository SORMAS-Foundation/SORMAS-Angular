import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { EventGroupAddEventsModalComponent } from './event-group-add-events-modal.component';

describe('EventGroupAddEventsModalComponent', () => {
  let component: EventGroupAddEventsModalComponent;
  let fixture: ComponentFixture<EventGroupAddEventsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventGroupAddEventsModalComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupAddEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
