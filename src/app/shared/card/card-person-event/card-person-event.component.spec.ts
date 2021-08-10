import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonEventComponent } from './card-person-event.component';

describe('CardPersonEventComponent', () => {
  let component: CardPersonEventComponent;
  let fixture: ComponentFixture<CardPersonEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPersonEventComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
