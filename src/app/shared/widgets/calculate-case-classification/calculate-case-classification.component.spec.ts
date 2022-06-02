import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CalculateCaseClassificationComponent } from './calculate-case-classification.component';

describe('CalculateCaseClassificationComponent', () => {
  let component: CalculateCaseClassificationComponent;
  let fixture: ComponentFixture<CalculateCaseClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateCaseClassificationComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateCaseClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
