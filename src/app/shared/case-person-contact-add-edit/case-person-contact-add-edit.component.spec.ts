import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePersonContactAddEditComponent } from './case-person-contact-add-edit.component';

describe('CasePersonContactAddEditComponent', () => {
  let component: CasePersonContactAddEditComponent;
  let fixture: ComponentFixture<CasePersonContactAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasePersonContactAddEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePersonContactAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
