/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { DistrictListComponent } from './district-list.component';

describe('DistrictListComponent', () => {
  let component: DistrictListComponent;
  let fixture: ComponentFixture<DistrictListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DistrictListComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
