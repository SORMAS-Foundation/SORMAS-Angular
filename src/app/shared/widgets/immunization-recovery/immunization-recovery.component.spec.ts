import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImmunizationRecoveryComponent } from './immunization-recovery.component';

describe('ImmunizationRecoveryComponent', () => {
  let component: ImmunizationRecoveryComponent;
  let fixture: ComponentFixture<ImmunizationRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmunizationRecoveryComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
