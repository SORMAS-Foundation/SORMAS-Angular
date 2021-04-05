/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePersonAddressComponent } from './case-person-address.component';

describe('CasePersonAddressComponent', () => {
  let component: CasePersonAddressComponent;
  let fixture: ComponentFixture<CasePersonAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasePersonAddressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePersonAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
