import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTestResultsComponent } from './dashboard-test-results.component';

describe('DashboardTestResultsComponent', () => {
  let component: DashboardTestResultsComponent;
  let fixture: ComponentFixture<DashboardTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTestResultsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
