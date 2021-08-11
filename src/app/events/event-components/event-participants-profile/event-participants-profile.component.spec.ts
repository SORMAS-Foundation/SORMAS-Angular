import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { EventParticipantsProfileComponent } from './event-participants-profile.component';

describe('EventParticipantsProfileComponent', () => {
  let component: EventParticipantsProfileComponent;
  let fixture: ComponentFixture<EventParticipantsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventParticipantsProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
