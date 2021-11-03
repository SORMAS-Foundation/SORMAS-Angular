import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LineListingItemComponent } from './line-listing-item.component';

describe('LineListingItemComponent', () => {
  let component: LineListingItemComponent;
  let fixture: ComponentFixture<LineListingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineListingItemComponent],
      imports: [MatDialogModule, HttpClientTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
