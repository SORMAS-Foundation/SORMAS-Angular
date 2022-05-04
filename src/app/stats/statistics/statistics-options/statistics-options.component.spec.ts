/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { StatisticsOptionsComponent } from './statistics-options.component';

describe('StatisticsOptionsComponent', () => {
  let component: StatisticsOptionsComponent;
  let fixture: ComponentFixture<StatisticsOptionsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StatisticsOptionsComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
