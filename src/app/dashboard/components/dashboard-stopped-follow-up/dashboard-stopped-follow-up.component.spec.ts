import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { DashboardStoppedFollowUpComponent } from './dashboard-stopped-follow-up.component';

describe('DashboardStoppedFollowUpComponent', () => {
  let component: DashboardStoppedFollowUpComponent;
  let fixture: ComponentFixture<DashboardStoppedFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStoppedFollowUpComponent],
      imports: [HttpClientTestingModule, MaterialModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoppedFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
