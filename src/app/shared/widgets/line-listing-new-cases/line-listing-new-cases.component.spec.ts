import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { FORM_DATA_BASE } from '../../../app.constants';
import { LineListingNewCasesComponent } from './line-listing-new-cases.component';

describe('LineListingNewCasesComponent', () => {
  let component: LineListingNewCasesComponent;
  let fixture: ComponentFixture<LineListingNewCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineListingNewCasesComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingNewCasesComponent);
    component = fixture.componentInstance;
    component.config = FORM_DATA_BASE;
    component.group = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
