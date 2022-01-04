import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TableStaticComponent } from './table-static.component';

describe('TableStaticComponent', () => {
  let component: TableStaticComponent;
  let fixture: ComponentFixture<TableStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableStaticComponent],
      imports: [MatDialogModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
