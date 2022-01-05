/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventActionsComponent } from './card-event-actions.component';

describe('CardEventActionsComponent', () => {
  let component: CardEventActionsComponent;
  let fixture: ComponentFixture<CardEventActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEventActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
