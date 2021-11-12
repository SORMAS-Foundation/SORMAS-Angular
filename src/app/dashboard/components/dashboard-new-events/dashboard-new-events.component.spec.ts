import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewEventsComponent } from './dashboard-new-events.component';

describe('DashboardNewEventsComponent', () => {
  let component: DashboardNewEventsComponent;
  let fixture: ComponentFixture<DashboardNewEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
