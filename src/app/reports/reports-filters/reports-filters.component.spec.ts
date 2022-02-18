import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../_pipes/pipes.module';
import { ReportsFiltersComponent } from './reports-filters.component';

describe('ReportsFiltersComponent', () => {
  let component: ReportsFiltersComponent;
  let fixture: ComponentFixture<ReportsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsFiltersComponent],
      imports: [TranslateModule.forRoot(), PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
