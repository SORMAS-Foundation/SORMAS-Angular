import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { PersonContactsListComponent } from './person-contacts-list.component';

describe('PersonContactsListComponent', () => {
  let component: PersonContactsListComponent;
  let fixture: ComponentFixture<PersonContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonContactsListComponent],
      imports: [TranslateModule.forRoot(), MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
