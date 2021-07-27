import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupLinkComponent } from './card-group-link.component';

describe('CardGroupLinkComponent', () => {
  let component: CardGroupLinkComponent;
  let fixture: ComponentFixture<CardGroupLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGroupLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
