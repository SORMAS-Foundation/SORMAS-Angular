import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonCaseComponent } from './card-person-case.component';

describe('CardPersonCaseComponent', () => {
  let component: CardPersonCaseComponent;
  let fixture: ComponentFixture<CardPersonCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPersonCaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
