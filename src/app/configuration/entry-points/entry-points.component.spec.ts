/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPointsComponent } from './entry-points.component';

describe('EntryPointsComponent', () => {
  let component: EntryPointsComponent;
  let fixture: ComponentFixture<EntryPointsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [EntryPointsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
