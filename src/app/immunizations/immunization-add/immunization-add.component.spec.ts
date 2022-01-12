import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImmunizationAddComponent } from './immunization-add.component';

describe('ImmunizationAddComponent', () => {
  let component: ImmunizationAddComponent;
  let fixture: ComponentFixture<ImmunizationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmunizationAddComponent],
      imports: [HttpClientTestingModule],
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
