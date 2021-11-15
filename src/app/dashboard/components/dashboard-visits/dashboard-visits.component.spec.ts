import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVisitsComponent } from './dashboard-visits.component';

describe('DashboardVisitsComponent', () => {
  let component: DashboardVisitsComponent;
  let fixture: ComponentFixture<DashboardVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardVisitsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
