import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowUpAddVisitComponent } from './case-follow-up-add-visit.component';

describe('CaseFollowUpAddVisitComponent', () => {
  let component: CaseFollowUpAddVisitComponent;
  let fixture: ComponentFixture<CaseFollowUpAddVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseFollowUpAddVisitComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowUpAddVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
