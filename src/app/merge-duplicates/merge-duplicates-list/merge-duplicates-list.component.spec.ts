import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeDuplicatesListComponent } from './merge-duplicates-list.component';

describe('MergeDuplicatesListComponent', () => {
  let component: MergeDuplicatesListComponent;
  let fixture: ComponentFixture<MergeDuplicatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeDuplicatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
