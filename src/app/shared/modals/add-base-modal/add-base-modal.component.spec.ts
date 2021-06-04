import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaseModalComponent } from './add-base-modal.component';

describe('AddBaseModalComponent', () => {
  let component: AddBaseModalComponent;
  let fixture: ComponentFixture<AddBaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBaseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
