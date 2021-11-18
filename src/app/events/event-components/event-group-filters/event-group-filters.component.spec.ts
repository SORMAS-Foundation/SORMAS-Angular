import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGroupFiltersComponent } from './event-group-filters.component';

describe('EventGroupFiltersComponent', () => {
  let component: EventGroupFiltersComponent;
  let fixture: ComponentFixture<EventGroupFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventGroupFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
