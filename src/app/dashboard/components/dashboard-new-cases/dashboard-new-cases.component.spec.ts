import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewCasesComponent } from './dashboard-new-cases.component';

describe('DashboardNewCasesComponent', () => {
  let component: DashboardNewCasesComponent;
  let fixture: ComponentFixture<DashboardNewCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNewCasesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
