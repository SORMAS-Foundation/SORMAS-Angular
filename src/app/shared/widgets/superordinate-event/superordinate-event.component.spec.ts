import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperordinateEventComponent } from './superordinate-event.component';

describe('SuperordinateEventComponent', () => {
  let component: SuperordinateEventComponent;
  let fixture: ComponentFixture<SuperordinateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperordinateEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperordinateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
