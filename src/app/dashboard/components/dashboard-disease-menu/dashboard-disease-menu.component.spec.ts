import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { DashboardDiseaseMenuComponent } from './dashboard-disease-menu.component';

describe('DashboardDiseaseMenuComponent', () => {
  let component: DashboardDiseaseMenuComponent;
  let fixture: ComponentFixture<DashboardDiseaseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDiseaseMenuComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiseaseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
