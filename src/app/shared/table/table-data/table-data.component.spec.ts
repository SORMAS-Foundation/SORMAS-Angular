/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from '../../../_pipes/pipes.module';

import { TableDataComponent } from './table-data.component';

describe('CellDataComponent', () => {
  let component: TableDataComponent;
  let fixture: ComponentFixture<TableDataComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TableDataComponent],
      imports: [PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataComponent);
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
