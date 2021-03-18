import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSymptomsComponent } from './case-symptoms.component';

describe('CaseSymptomsComponent', () => {
  let component: CaseSymptomsComponent;
  let fixture: ComponentFixture<CaseSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseSymptomsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
