import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrevHospitalizationComponent } from './card-prev-hospitalization.component';

describe('CardPrevHospitalizationComponent', () => {
  let component: CardPrevHospitalizationComponent;
  let fixture: ComponentFixture<CardPrevHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrevHospitalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrevHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
