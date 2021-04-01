import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { Table3Component } from './table3.component';

describe('Table3Component', () => {
  let component: Table3Component;
  let fixture: ComponentFixture<Table3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Table3Component],
      imports: [MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
