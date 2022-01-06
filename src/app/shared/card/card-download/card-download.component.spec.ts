/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanizePipe } from '../../../_pipes/humanize/humanize.pipe';

import { CardDownloadComponent } from './card-download.component';

describe('CardCaseSampleComponent', () => {
  let component: CardDownloadComponent;
  let fixture: ComponentFixture<CardDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDownloadComponent, HumanizePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
