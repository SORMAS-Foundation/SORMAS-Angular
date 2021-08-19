import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../_pipes/pipes.module';

import { UserFiltersComponent } from './user-filters.component';

describe('UserFiltersComponent', () => {
  let component: UserFiltersComponent;
  let fixture: ComponentFixture<UserFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFiltersComponent],
      imports: [TranslateModule.forRoot(), PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
