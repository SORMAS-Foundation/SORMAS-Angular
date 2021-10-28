import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { AddressesListComponent } from './addresses-list.component';

describe('AddressesListComponent', () => {
  let component: AddressesListComponent;
  let fixture: ComponentFixture<AddressesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressesListComponent],
      imports: [MaterialModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
