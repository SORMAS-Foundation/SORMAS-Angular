import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseEpidemiologicalDataComponent } from './case-epidemiological-data.component';

describe('CaseEpidemiologicalDataComponent', () => {
  let component: CaseEpidemiologicalDataComponent;
  let fixture: ComponentFixture<CaseEpidemiologicalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseEpidemiologicalDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEpidemiologicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
