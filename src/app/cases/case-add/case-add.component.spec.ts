import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAddComponent } from './case-add.component';

describe('CaseAddComponent', () => {
  let component: CaseAddComponent;
  let fixture: ComponentFixture<CaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
