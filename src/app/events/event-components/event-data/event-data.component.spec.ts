import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventDataComponent } from './event-data.component';

describe('EventDataComponent', () => {
  let component: EventDataComponent;
  let fixture: ComponentFixture<EventDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDataComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
