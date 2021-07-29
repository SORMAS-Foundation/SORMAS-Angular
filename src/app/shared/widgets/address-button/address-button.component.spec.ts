import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressButtonComponent } from './address-button.component';

describe('AddressButtonComponent', () => {
  let component: AddressButtonComponent;
  let fixture: ComponentFixture<AddressButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressButtonComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
