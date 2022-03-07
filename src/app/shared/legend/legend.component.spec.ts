/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LegendComponent } from './legend.component';

describe('CellDataComponent', () => {
  let component: LegendComponent;
  let fixture: ComponentFixture<LegendComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LegendComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
