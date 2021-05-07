/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { SymptomsGroupSelectComponent } from './symptoms-group-select.component';

describe('SymptomsGroupSelectComponent', () => {
  let component: SymptomsGroupSelectComponent;
  let fixture: ComponentFixture<SymptomsGroupSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymptomsGroupSelectComponent],
      imports: [TranslateModule],
      providers: [TranslateService, TranslateStore, TranslateLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
