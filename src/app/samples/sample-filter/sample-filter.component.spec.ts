import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFilterComponent } from './sample-filter.component';

describe('SampleFilterComponent', () => {
  let component: SampleFilterComponent;
  let fixture: ComponentFixture<SampleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
