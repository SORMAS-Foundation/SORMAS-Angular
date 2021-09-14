import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSamplePathogenComponent } from './card-sample-pathogen.component';

describe('CardSamplePathogenComponent', () => {
  let component: CardSamplePathogenComponent;
  let fixture: ComponentFixture<CardSamplePathogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSamplePathogenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSamplePathogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
