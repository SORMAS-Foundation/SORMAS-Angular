import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { EventFiltersComponent } from './event-filters.component';

describe('EventFiltersComponent', () => {
  let component: EventFiltersComponent;
  let fixture: ComponentFixture<EventFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
