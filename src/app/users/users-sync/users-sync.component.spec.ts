/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';
import { UsersSyncComponent } from './users-sync.component';

describe('UsersSyncComponent', () => {
  let component: UsersSyncComponent;
  let fixture: ComponentFixture<UsersSyncComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UsersSyncComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
