import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { MergeDuplicatesCaseGuideComponent } from './merge-duplicates-case-guide.component';

describe('MergeDuplicatesCaseGuideComponent', () => {
  let component: MergeDuplicatesCaseGuideComponent;
  let fixture: ComponentFixture<MergeDuplicatesCaseGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeDuplicatesCaseGuideComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicatesCaseGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
