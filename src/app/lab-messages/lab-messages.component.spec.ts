import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMessagesComponent } from './lab-messages.component';

describe('LabMessagesComponent', () => {
  let component: LabMessagesComponent;
  let fixture: ComponentFixture<LabMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabMessagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
