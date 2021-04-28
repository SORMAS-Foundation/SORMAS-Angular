/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsGroupSelectComponent } from './symptoms-group-select.component';

describe('SymptomsGroupSelectComponent', () => {
  let component: SymptomsGroupSelectComponent;
  let fixture: ComponentFixture<SymptomsGroupSelectComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SymptomsGroupSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
