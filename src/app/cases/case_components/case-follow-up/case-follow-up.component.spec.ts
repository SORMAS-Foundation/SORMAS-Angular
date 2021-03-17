import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowUpComponent } from './case-follow-up.component';

describe('CaseFollowUpComponent', () => {
  let component: CaseFollowUpComponent;
  let fixture: ComponentFixture<CaseFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseFollowUpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
