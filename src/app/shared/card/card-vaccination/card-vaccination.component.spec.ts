import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVaccinationComponent } from './card-vaccination.component';

describe('CardVaccinationComponent', () => {
  let component: CardVaccinationComponent;
  let fixture: ComponentFixture<CardVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardVaccinationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
