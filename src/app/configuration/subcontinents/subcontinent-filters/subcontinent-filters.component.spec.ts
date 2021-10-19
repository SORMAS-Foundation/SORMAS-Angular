import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { SubcontinentFiltersComponent } from './subcontinent-filters.component';

describe('SubcontinentFiltersComponent', () => {
  let component: SubcontinentFiltersComponent;
  let fixture: ComponentFixture<SubcontinentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcontinentFiltersComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontinentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
