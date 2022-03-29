import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeDuplicatesComponent } from './merge-duplicates.component';

describe('MergeDuplicatesComponent', () => {
  let component: MergeDuplicatesComponent;
  let fixture: ComponentFixture<MergeDuplicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeDuplicatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
