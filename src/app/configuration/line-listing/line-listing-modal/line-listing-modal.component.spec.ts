import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineListingModalComponent } from './line-listing-modal.component';

describe('LineListingModalComponent', () => {
  let component: LineListingModalComponent;
  let fixture: ComponentFixture<LineListingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineListingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
