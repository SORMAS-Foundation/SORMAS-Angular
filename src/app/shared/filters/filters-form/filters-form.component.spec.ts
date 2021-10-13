/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { FiltersFormComponent } from './filters-form.component';

describe('FiltersFormComponent', () => {
  let component: FiltersFormComponent;
  let fixture: ComponentFixture<FiltersFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FiltersFormComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
