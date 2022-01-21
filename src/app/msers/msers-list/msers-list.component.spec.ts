import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MsersListComponent } from './msers-list.component';

describe('MsersListComponent', () => {
  let component: MsersListComponent;
  let fixture: ComponentFixture<MsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsersListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
