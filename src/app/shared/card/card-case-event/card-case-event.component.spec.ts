/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaseEventComponent } from './card-case-event.component';

describe('CardCaseEventComponent', () => {
  let component: CardCaseEventComponent;
  let fixture: ComponentFixture<CardCaseEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCaseEventComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
