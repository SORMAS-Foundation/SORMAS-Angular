import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContactStatsComponent } from './dashboard-contact-stats.component';

describe('DashboardContactStatsComponent', () => {
  let component: DashboardContactStatsComponent;
  let fixture: ComponentFixture<DashboardContactStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContactStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContactStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
