import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { CaseClinicalCourseComponent } from './case-clinical-course.component';

describe('CaseClinicalCourseComponent', () => {
  let component: CaseClinicalCourseComponent;
  let fixture: ComponentFixture<CaseClinicalCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseClinicalCourseComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
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
