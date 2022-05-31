/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../_pipes/pipes.module';

import { ClassificationRulesComponent } from './classification-rules.component';

describe('ClassificationRulesComponent', () => {
  let component: ClassificationRulesComponent;
  let fixture: ComponentFixture<ClassificationRulesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ClassificationRulesComponent],
      imports: [TranslateModule.forRoot(), PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
