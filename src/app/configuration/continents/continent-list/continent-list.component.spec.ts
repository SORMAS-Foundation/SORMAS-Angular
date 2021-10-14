import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { ContinentListComponent } from './continent-list.component';

describe('ContinentListComponent', () => {
  let component: ContinentListComponent;
  let fixture: ComponentFixture<ContinentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContinentListComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
