import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CaseContactsComponent } from './case-contacts.component';

describe('CaseContactsComponent', () => {
  let component: CaseContactsComponent;
  let fixture: ComponentFixture<CaseContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseContactsComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
