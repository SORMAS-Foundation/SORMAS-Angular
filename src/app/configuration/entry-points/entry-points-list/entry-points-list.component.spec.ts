import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { EntryPointsListComponent } from './entry-points-list.component';

describe('PointsOfEntriesListComponent', () => {
  let component: EntryPointsListComponent;
  let fixture: ComponentFixture<EntryPointsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryPointsListComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MatDialogModule],
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
