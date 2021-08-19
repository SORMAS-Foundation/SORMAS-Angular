import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEpidemiologicalDataComponent } from './contact-epidemiological-data.component';

describe('ContactEpidemiologicalDataComponent', () => {
  let component: ContactEpidemiologicalDataComponent;
  let fixture: ComponentFixture<ContactEpidemiologicalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEpidemiologicalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEpidemiologicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
