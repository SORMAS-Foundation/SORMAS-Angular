import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDropdownsComponent } from './location-dropdowns.component';

describe('LocationDropdownsComponent', () => {
  let component: LocationDropdownsComponent;
  let fixture: ComponentFixture<LocationDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationDropdownsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
