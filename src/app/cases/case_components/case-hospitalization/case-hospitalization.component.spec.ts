import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHospitalizationComponent } from './case-hospitalization.component';

describe('CaseHospitalizationComponent', () => {
  let component: CaseHospitalizationComponent;
  let fixture: ComponentFixture<CaseHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseHospitalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
