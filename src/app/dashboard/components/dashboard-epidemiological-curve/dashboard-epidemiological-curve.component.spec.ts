import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEpidemiologicalCurveComponent } from './dashboard-epidemiological-curve.component';

describe('DashboardEpidemiologicalCurveComponent', () => {
  let component: DashboardEpidemiologicalCurveComponent;
  let fixture: ComponentFixture<DashboardEpidemiologicalCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEpidemiologicalCurveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEpidemiologicalCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
