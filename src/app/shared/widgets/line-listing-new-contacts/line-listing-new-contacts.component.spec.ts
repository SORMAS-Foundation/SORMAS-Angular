import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { FORM_DATA_BASE } from '../../../app.constants';
import { LineListingNewContactsComponent } from './line-listing-new-contacts.component';

describe('LineListingNewContactsComponent', () => {
  let component: LineListingNewContactsComponent;
  let fixture: ComponentFixture<LineListingNewContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineListingNewContactsComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingNewContactsComponent);
    component = fixture.componentInstance;
    component.config = FORM_DATA_BASE;
    component.group = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
