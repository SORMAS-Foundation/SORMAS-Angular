import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactFollowUpComponent } from './contact-follow-up.component';
import { MaterialModule } from '../../../material.module';

describe('ContactFollowUpComponent', () => {
  let component: ContactFollowUpComponent;
  let fixture: ComponentFixture<ContactFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFollowUpComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
