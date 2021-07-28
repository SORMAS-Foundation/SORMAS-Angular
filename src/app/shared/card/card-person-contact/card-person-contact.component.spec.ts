import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonContactComponent } from './card-person-contact.component';

describe('CardPersonContactComponent', () => {
  let component: CardPersonContactComponent;
  let fixture: ComponentFixture<CardPersonContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPersonContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
