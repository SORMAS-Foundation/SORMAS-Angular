import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantsProfileComponent } from './event-participants-profile.component';

describe('EventParticipantsProfileComponent', () => {
  let component: EventParticipantsProfileComponent;
  let fixture: ComponentFixture<EventParticipantsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventParticipantsProfileComponent],
    })
    .compileComponents();
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
