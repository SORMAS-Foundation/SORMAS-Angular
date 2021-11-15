import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoppedFollowUpComponent } from './dashboard-stopped-follow-up.component';

describe('DashboardStoppedFollowUpComponent', () => {
  let component: DashboardStoppedFollowUpComponent;
  let fixture: ComponentFixture<DashboardStoppedFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStoppedFollowUpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoppedFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
