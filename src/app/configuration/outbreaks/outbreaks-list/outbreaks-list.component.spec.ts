import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { OutbreaksListComponent } from './outbreaks-list.component';

describe('OutbreaksListComponent', () => {
  let component: OutbreaksListComponent;
  let fixture: ComponentFixture<OutbreaksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutbreaksListComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbreaksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
