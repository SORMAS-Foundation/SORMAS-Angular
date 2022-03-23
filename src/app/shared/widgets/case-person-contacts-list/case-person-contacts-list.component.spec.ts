import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePersonContactsListComponent } from './case-person-contacts-list.component';

describe('CasePersonContactsListComponent', () => {
  let component: CasePersonContactsListComponent;
  let fixture: ComponentFixture<CasePersonContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasePersonContactsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePersonContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
