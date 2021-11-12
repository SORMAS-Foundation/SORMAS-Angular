import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUnderFollowUpComponent } from './dashboard-under-follow-up.component';

describe('DashboardUnderFollowUpComponent', () => {
  let component: DashboardUnderFollowUpComponent;
  let fixture: ComponentFixture<DashboardUnderFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardUnderFollowUpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUnderFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
