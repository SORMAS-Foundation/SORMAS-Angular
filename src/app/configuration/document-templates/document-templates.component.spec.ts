/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplatesComponent } from './document-templates.component';

describe('DocumentTemplatesComponent', () => {
  let component: DocumentTemplatesComponent;
  let fixture: ComponentFixture<DocumentTemplatesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DocumentTemplatesComponent],
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
