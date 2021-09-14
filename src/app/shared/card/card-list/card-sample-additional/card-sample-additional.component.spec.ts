import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSampleAdditionalComponent } from './card-sample-additional.component';

describe('CardSampleAdditionalComponent', () => {
  let component: CardSampleAdditionalComponent;
  let fixture: ComponentFixture<CardSampleAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSampleAdditionalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSampleAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
