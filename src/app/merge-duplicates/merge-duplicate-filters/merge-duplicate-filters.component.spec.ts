import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { MergeDuplicateFiltersComponent } from './merge-duplicate-filters.component';

describe('MergeDuplicateFiltersComponent', () => {
  let component: MergeDuplicateFiltersComponent;
  let fixture: ComponentFixture<MergeDuplicateFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeDuplicateFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicateFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
