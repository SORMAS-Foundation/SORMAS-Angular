/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaseTaskComponent } from './card-case-task.component';

describe('CardCaseTaskComponent', () => {
  let component: CardCaseTaskComponent;
  let fixture: ComponentFixture<CardCaseTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCaseTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaseTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
