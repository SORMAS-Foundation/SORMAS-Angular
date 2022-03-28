import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BasicCaseExportComponent } from './basic-case-export.component';

describe('BasicCaseExportComponent', () => {
  let component: BasicCaseExportComponent;
  let fixture: ComponentFixture<BasicCaseExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicCaseExportComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCaseExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
