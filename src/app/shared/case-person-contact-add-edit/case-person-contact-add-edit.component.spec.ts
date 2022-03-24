import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { CasePersonContactAddEditComponent } from './case-person-contact-add-edit.component';

describe('CasePersonContactAddEditComponent', () => {
  let component: CasePersonContactAddEditComponent;
  let fixture: ComponentFixture<CasePersonContactAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasePersonContactAddEditComponent],
      imports: [HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {
            updateSize: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePersonContactAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
