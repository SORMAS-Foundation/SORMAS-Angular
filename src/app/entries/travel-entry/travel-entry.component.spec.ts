import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEntryComponent } from './travel-entry.component';

describe('TravelEntryComponent', () => {
  let component: TravelEntryComponent;
  let fixture: ComponentFixture<TravelEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
