/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';

import { EdgePanelComponent } from './edge-panel.component';

describe('EdgePanelComponent', () => {
  let component: EdgePanelComponent;
  let fixture: ComponentFixture<EdgePanelComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [EdgePanelComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
