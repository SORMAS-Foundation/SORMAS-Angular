/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNotificationComponent } from './table-notification.component';

describe('TableNotificationComponent', () => {
  let component: TableNotificationComponent;
  let fixture: ComponentFixture<TableNotificationComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TableNotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
