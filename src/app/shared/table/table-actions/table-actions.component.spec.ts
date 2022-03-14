/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../../../_pipes/pipes.module';

import { TableActionsComponent } from './table-actions.component';

describe('CellDataComponent', () => {
  let component: TableActionsComponent;
  let fixture: ComponentFixture<TableActionsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TableActionsComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionsComponent);
    component = fixture.componentInstance;
    component.config = {
      name: 'test',
      dataKey: 'test',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
