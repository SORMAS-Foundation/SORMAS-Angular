import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGroupAddModalComponent } from './event-group-add-modal.component';

describe('EventGroupAddModalComponent', () => {
  let component: EventGroupAddModalComponent;
  let fixture: ComponentFixture<EventGroupAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventGroupAddModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
