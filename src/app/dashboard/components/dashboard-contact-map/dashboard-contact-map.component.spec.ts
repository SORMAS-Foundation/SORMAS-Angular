import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContactMapComponent } from './dashboard-contact-map.component';

describe('DashboardContactMapComponent', () => {
  let component: DashboardContactMapComponent;
  let fixture: ComponentFixture<DashboardContactMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardContactMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
