import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { SubcontinentListComponent } from './subcontinent-list.component';

describe('SubcontinentListComponent', () => {
  let component: SubcontinentListComponent;
  let fixture: ComponentFixture<SubcontinentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcontinentListComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontinentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
