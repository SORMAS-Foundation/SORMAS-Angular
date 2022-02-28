import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ImmunizationAddComponent } from './immunization-add.component';
import { MaterialModule } from '../../material.module';

describe('ImmunizationAddComponent', () => {
  let component: ImmunizationAddComponent;
  let fixture: ComponentFixture<ImmunizationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmunizationAddComponent],
      imports: [HttpClientTestingModule, MaterialModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
