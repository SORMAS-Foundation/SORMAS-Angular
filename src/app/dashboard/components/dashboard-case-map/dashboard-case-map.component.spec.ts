import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCaseMapComponent } from './dashboard-case-map.component';

describe('DashboardCaseMapComponent', () => {
  let component: DashboardCaseMapComponent;
  let fixture: ComponentFixture<DashboardCaseMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCaseMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCaseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
