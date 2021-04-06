/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEpidNumberComponent } from './new-epid-number.component';

describe('CasePersonAddressComponent', () => {
  let component: NewEpidNumberComponent;
  let fixture: ComponentFixture<NewEpidNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEpidNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEpidNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
