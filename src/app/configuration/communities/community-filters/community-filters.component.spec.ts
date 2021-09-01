/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../material.module';

import { CommunityFiltersComponent } from './community-filters.component';

describe('CommunityFiltersComponent', () => {
  let component: CommunityFiltersComponent;
  let fixture: ComponentFixture<CommunityFiltersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CommunityFiltersComponent],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
