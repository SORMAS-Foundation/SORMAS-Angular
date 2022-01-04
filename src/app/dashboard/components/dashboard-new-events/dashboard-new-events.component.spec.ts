import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardNewEventsComponent } from './dashboard-new-events.component';

describe('DashboardNewEventsComponent', () => {
  let component: DashboardNewEventsComponent;
  let fixture: ComponentFixture<DashboardNewEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNewEventsComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
