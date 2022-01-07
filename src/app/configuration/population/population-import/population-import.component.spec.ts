/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { PopulationImportComponent } from './population-import.component';

describe('PopulationImportComponent', () => {
  let component: PopulationImportComponent;
  let fixture: ComponentFixture<PopulationImportComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PopulationImportComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
