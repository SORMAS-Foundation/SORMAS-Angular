import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeDuplicatesTableComponent } from './merge-duplicates-table.component';

describe('MergeDuplicatesTableComponent', () => {
  let component: MergeDuplicatesTableComponent;
  let fixture: ComponentFixture<MergeDuplicatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeDuplicatesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
