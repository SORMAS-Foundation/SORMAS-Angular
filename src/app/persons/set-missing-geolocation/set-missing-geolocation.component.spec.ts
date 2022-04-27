import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';
import { SetMissingGeolocationComponent } from './set-missing-geolocation.component';

describe('SetMissingGeolocationComponent', () => {
  let component: SetMissingGeolocationComponent;
  let fixture: ComponentFixture<SetMissingGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetMissingGeolocationComponent],
      imports: [HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMissingGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
