import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardNewCasesComponent } from './dashboard-new-cases.component';

describe('DashboardNewCasesComponent', () => {
  let component: DashboardNewCasesComponent;
  let fixture: ComponentFixture<DashboardNewCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNewCasesComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
