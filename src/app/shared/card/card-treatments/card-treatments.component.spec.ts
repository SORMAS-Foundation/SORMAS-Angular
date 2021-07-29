import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTreatmentsComponent } from './card-treatments.component';

describe('CardTreatmentsComponent', () => {
  let component: CardTreatmentsComponent;
  let fixture: ComponentFixture<CardTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTreatmentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
