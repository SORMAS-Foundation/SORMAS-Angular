import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material.module';

import { DashboardDiseaseBurdenComponent } from './dashboard-disease-burden.component';

describe('DashboardDiseaseBurdenComponent', () => {
  let component: DashboardDiseaseBurdenComponent;
  let fixture: ComponentFixture<DashboardDiseaseBurdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDiseaseBurdenComponent],
      imports: [HttpClientTestingModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiseaseBurdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
