import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { DashboardEpidemiologicalCurveComponent } from './dashboard-epidemiological-curve.component';

describe('DashboardEpidemiologicalCurveComponent', () => {
  let component: DashboardEpidemiologicalCurveComponent;
  let fixture: ComponentFixture<DashboardEpidemiologicalCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEpidemiologicalCurveComponent],
      imports: [HttpClientTestingModule, MaterialModule, TranslateModule.forRoot()],
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
