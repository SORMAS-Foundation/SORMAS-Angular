import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../_pipes/pipes.module';
import { ReportsOfficerSummaryComponent } from './reports-officer-summary.component';

describe('ReportsOfficerSummaryComponent', () => {
  let component: ReportsOfficerSummaryComponent;
  let fixture: ComponentFixture<ReportsOfficerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsOfficerSummaryComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MaterialModule, PipesModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsOfficerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
