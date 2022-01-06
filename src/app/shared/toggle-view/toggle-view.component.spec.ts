/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleViewComponent } from './toggle-view.component';

describe('ToggleViewComponent', () => {
  let component: ToggleViewComponent;
  let fixture: ComponentFixture<ToggleViewComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ToggleViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
