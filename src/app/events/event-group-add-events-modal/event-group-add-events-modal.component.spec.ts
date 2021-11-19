import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventGroupAddEventsModalComponent } from './event-group-add-events-modal.component';

describe('EventGroupAddEventsModalComponent', () => {
  let component: EventGroupAddEventsModalComponent;
  let fixture: ComponentFixture<EventGroupAddEventsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventGroupAddEventsModalComponent],
      imports: [HttpClientTestingModule],
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
