import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEntryPersonComponent } from './travel-entry-person.component';

describe('TravelEntryPersonComponent', () => {
  let component: TravelEntryPersonComponent;
  let fixture: ComponentFixture<TravelEntryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelEntryPersonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEntryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
