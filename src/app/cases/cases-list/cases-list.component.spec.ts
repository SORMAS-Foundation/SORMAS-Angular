import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesListComponent } from './cases-list.component';

describe('CasesListComponent', () => {
  let component: CasesListComponent;
  let fixture: ComponentFixture<CasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
