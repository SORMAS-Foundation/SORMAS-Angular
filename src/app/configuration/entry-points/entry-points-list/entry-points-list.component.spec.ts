import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPointsListComponent } from './entry-points-list.component';

describe('PointsOfEntriesListComponent', () => {
  let component: EntryPointsListComponent;
  let fixture: ComponentFixture<EntryPointsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryPointsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
