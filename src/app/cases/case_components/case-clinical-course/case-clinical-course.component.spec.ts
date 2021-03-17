import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseClinicalCourseComponent } from './case-clinical-course.component';

describe('CaseClinicalCourseComponent', () => {
  let component: CaseClinicalCourseComponent;
  let fixture: ComponentFixture<CaseClinicalCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseClinicalCourseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseClinicalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
