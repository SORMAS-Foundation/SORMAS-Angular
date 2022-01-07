/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontinentsComponent } from './subcontinents.component';

describe('SubcontinentsComponent', () => {
  let component: SubcontinentsComponent;
  let fixture: ComponentFixture<SubcontinentsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SubcontinentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
