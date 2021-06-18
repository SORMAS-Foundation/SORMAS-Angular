/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { EdgePanelComponent } from './edge-panel.component';

describe('EdgePanelComponent', () => {
  let component: EdgePanelComponent;
  let fixture: ComponentFixture<EdgePanelComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [EdgePanelComponent],
      imports: [TranslateModule.forRoot()],
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
