import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineListingTableComponent } from './line-listing-table.component';

describe('LineListingTableComponent', () => {
  let component: LineListingTableComponent;
  let fixture: ComponentFixture<LineListingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineListingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
