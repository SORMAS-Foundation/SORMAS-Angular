import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEpidDataComponent } from './card-epid-data.component';

describe('CardEpidDataComponent', () => {
  let component: CardEpidDataComponent;
  let fixture: ComponentFixture<CardEpidDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEpidDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEpidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
