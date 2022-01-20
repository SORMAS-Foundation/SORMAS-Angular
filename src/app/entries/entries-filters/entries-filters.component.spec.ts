import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { EntriesFiltersComponent } from './entries-filters.component';

describe('EntriesFiltersComponent', () => {
  let component: EntriesFiltersComponent;
  let fixture: ComponentFixture<EntriesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntriesFiltersComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
