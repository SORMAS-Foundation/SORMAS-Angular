import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardDiseaseOverviewComponent } from './dashboard-disease-overview.component';

describe('DashboardDiseaseOverviewComponent', () => {
  let component: DashboardDiseaseOverviewComponent;
  let fixture: ComponentFixture<DashboardDiseaseOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDiseaseOverviewComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiseaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
