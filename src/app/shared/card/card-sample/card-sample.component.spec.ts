/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanizePipe } from '../../../_pipes/humanize/humanize.pipe';

import { CardSampleComponent } from './card-sample.component';

describe('CardCaseSampleComponent', () => {
  let component: CardSampleComponent;
  let fixture: ComponentFixture<CardSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSampleComponent, HumanizePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
