/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanizePipe } from '../../../_pipes/humanize/humanize.pipe';

import { CardDocumentTemplateComponent } from './card-document-template.component';

describe('CardCaseSampleComponent', () => {
  let component: CardDocumentTemplateComponent;
  let fixture: ComponentFixture<CardDocumentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDocumentTemplateComponent, HumanizePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDocumentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
