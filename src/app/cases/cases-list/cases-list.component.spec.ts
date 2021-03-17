import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CasesListComponent } from './cases-list.component';

describe('CasesListComponent', () => {
  let component: CasesListComponent;
  let fixture: ComponentFixture<CasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasesListComponent],
      imports: [HttpClientModule, RouterTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
