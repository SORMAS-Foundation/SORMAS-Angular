import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsListComponent } from './treatments-list.component';

describe('TreatmentsListComponent', () => {
  let component: TreatmentsListComponent;
  let fixture: ComponentFixture<TreatmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreatmentsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
