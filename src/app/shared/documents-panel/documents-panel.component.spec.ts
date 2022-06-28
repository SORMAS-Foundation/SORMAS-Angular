/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DocumentsPanelComponent } from './documents-panel.component';
import { PipesModule } from '../../_pipes/pipes.module';

describe('DocumentsPanelComponent', () => {
  let component: DocumentsPanelComponent;
  let fixture: ComponentFixture<DocumentsPanelComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DocumentsPanelComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule, HttpClientTestingModule, PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
