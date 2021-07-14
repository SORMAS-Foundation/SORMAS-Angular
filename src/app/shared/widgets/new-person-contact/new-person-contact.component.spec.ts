import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { NewPersonContactComponent } from './new-person-contact.component';

describe('NewPersonContactComponent', () => {
  let component: NewPersonContactComponent;
  let fixture: ComponentFixture<NewPersonContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPersonContactComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
