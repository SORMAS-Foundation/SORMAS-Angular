import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardTestResultsComponent } from './dashboard-test-results.component';

describe('DashboardTestResultsComponent', () => {
  let component: DashboardTestResultsComponent;
  let fixture: ComponentFixture<DashboardTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTestResultsComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MatDialogModule],
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
