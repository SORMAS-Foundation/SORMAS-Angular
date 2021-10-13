import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentAddEditComponent } from './continent-add-edit.component';

describe('ContinentAddEditComponent', () => {
  let component: ContinentAddEditComponent;
  let fixture: ComponentFixture<ContinentAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
