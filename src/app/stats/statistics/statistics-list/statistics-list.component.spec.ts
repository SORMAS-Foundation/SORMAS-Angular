/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsListComponent } from './statistics-list.component';

describe('StatisticsListComponent', () => {
  let component: StatisticsListComponent;
  let fixture: ComponentFixture<StatisticsListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StatisticsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
