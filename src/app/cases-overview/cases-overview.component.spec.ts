import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesOverviewComponent } from './cases-overview.component';

describe('CasesOverviewComponent', () => {
  let component: CasesOverviewComponent;
  let fixture: ComponentFixture<CasesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasesOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
