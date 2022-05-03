import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SpecificSearchFoundComponent } from './specific-search-found.component';

describe('SpecificSearchFoundComponent', () => {
  let component: SpecificSearchFoundComponent;
  let fixture: ComponentFixture<SpecificSearchFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecificSearchFoundComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificSearchFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
