/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { OutbreaksComponent } from './outbreaks.component';

describe('OutbreaksComponent', () => {
  let component: OutbreaksComponent;
  let fixture: ComponentFixture<OutbreaksComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [OutbreaksComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
