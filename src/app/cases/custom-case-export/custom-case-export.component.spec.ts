/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CustomCaseExportComponent } from './custom-case-export.component';

describe('CustomCaseExportComponent', () => {
  let component: CustomCaseExportComponent;
  let fixture: ComponentFixture<CustomCaseExportComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CustomCaseExportComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCaseExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
