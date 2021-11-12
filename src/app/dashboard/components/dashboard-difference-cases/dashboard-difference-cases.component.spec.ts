import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDifferenceCasesComponent } from './dashboard-difference-cases.component';

describe('DashboardDifferenceCasesComponent', () => {
  let component: DashboardDifferenceCasesComponent;
  let fixture: ComponentFixture<DashboardDifferenceCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDifferenceCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDifferenceCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
