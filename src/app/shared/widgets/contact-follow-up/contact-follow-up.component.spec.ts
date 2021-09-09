import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFollowUpComponent } from './contact-follow-up.component';

describe('ContactFollowUpComponent', () => {
  let component: ContactFollowUpComponent;
  let fixture: ComponentFixture<ContactFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFollowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
