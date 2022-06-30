import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpVisitAddComponent } from './follow-up-visit-add.component';

describe('FollowUpVisitAddComponent', () => {
  let component: FollowUpVisitAddComponent;
  let fixture: ComponentFixture<FollowUpVisitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowUpVisitAddComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpVisitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
