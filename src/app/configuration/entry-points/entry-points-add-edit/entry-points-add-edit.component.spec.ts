import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPointsAddEditComponent } from './entry-points-add-edit.component';

describe('EntryPointsAddEditComponent', () => {
  let component: EntryPointsAddEditComponent;
  let fixture: ComponentFixture<EntryPointsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryPointsAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPointsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
