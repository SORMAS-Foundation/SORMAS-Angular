import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { EventParticipantsFiltersComponent } from './event-participants-filters.component';

describe('EventParticipantsFiltersComponent', () => {
  let component: EventParticipantsFiltersComponent;
  let fixture: ComponentFixture<EventParticipantsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventParticipantsFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
