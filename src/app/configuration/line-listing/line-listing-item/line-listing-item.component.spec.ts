import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineListingItemComponent } from './line-listing-item.component';

describe('LineListingItemComponent', () => {
  let component: LineListingItemComponent;
  let fixture: ComponentFixture<LineListingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineListingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
