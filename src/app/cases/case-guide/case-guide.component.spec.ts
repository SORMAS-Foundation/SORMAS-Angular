/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CaseGuideComponent } from './case-guide.component';

describe('CaseGuideComponent', () => {
  let component: CaseGuideComponent;
  let fixture: ComponentFixture<CaseGuideComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CaseGuideComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
