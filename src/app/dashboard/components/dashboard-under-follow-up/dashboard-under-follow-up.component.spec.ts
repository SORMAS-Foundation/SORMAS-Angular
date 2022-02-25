import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { DashboardUnderFollowUpComponent } from './dashboard-under-follow-up.component';

describe('DashboardUnderFollowUpComponent', () => {
  let component: DashboardUnderFollowUpComponent;
  let fixture: ComponentFixture<DashboardUnderFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardUnderFollowUpComponent],
      imports: [HttpClientTestingModule, MaterialModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUnderFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
