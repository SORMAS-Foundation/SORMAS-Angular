import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AddVisitsGroupSelectComponent } from './add-visits-group-select.component';

describe('AddVisitsGroupSelectComponent', () => {
  let component: AddVisitsGroupSelectComponent;
  let fixture: ComponentFixture<AddVisitsGroupSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVisitsGroupSelectComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitsGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
