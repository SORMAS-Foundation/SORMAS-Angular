import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCaseDetailsComponent } from './contact-case-details.component';

describe('ContactCaseDetailsComponent', () => {
  let component: ContactCaseDetailsComponent;
  let fixture: ComponentFixture<ContactCaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCaseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
