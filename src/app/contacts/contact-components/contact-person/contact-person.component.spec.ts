import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonComponent } from './contact-person.component';

describe('ContactPersonComponent', () => {
  let component: ContactPersonComponent;
  let fixture: ComponentFixture<ContactPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
