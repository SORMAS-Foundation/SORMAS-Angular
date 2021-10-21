/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { DocumentTemplatesComponent } from './document-templates.component';

describe('DocumentTemplatesComponent', () => {
  let component: DocumentTemplatesComponent;
  let fixture: ComponentFixture<DocumentTemplatesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DocumentTemplatesComponent],
      imports: [HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
