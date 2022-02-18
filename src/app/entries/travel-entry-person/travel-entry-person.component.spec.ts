import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TravelEntryPersonComponent } from './travel-entry-person.component';

describe('TravelEntryPersonComponent', () => {
  let component: TravelEntryPersonComponent;
  let fixture: ComponentFixture<TravelEntryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelEntryPersonComponent],
      imports: [HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEntryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
