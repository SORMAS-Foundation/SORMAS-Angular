import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAddComponent } from './sample-add.component';

describe('SampleAddComponent', () => {
  let component: SampleAddComponent;
  let fixture: ComponentFixture<SampleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
