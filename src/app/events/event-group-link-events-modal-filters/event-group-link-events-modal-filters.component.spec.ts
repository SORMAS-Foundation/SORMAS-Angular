import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { EventGroupLinkEventsModalFiltersComponent } from './event-group-link-events-modal-filters.component';

describe('EventGroupLinkEventsModalFiltersComponent', () => {
  let component: EventGroupLinkEventsModalFiltersComponent;
  let fixture: ComponentFixture<EventGroupLinkEventsModalFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventGroupLinkEventsModalFiltersComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupLinkEventsModalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
