import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePersonComponent } from './case-person.component';

describe('CasePersonComponent', () => {
  let component: CasePersonComponent;
  let fixture: ComponentFixture<CasePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
