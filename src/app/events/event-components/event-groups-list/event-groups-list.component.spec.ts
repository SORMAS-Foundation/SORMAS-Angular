import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGroupsListComponent } from './event-groups-list.component';

describe('EventGroupsListComponent', () => {
  let component: EventGroupsListComponent;
  let fixture: ComponentFixture<EventGroupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventGroupsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
