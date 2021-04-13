/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSampleComponent } from './card-sample.component';

describe('CardCaseTaskComponent', () => {
  let component: CardSampleComponent;
  let fixture: ComponentFixture<CardSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
