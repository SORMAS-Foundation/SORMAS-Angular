/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ExportConfigurationComponent } from './export-configuration.component';

describe('ExportConfigurationComponent', () => {
  let component: ExportConfigurationComponent;
  let fixture: ComponentFixture<ExportConfigurationComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ExportConfigurationComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
