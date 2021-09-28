import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DistrictAddEditComponent } from './district-add-edit.component';

describe('DistrictAddEditComponent', () => {
  let component: DistrictAddEditComponent;
  let fixture: ComponentFixture<DistrictAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictAddEditComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
