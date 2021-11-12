import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FacilityAddEditComponent } from './facility-add-edit.component';

describe('FacilityAddEditComponent', () => {
  let component: FacilityAddEditComponent;
  let fixture: ComponentFixture<FacilityAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacilityAddEditComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
