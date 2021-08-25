/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineListingComponent } from './line-listing.component';

describe('LineListingComponent', () => {
  let component: LineListingComponent;
  let fixture: ComponentFixture<LineListingComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LineListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
