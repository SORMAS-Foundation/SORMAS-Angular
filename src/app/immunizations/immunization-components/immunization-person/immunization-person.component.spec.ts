import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationPersonComponent } from './immunization-person.component';

describe('ImmunizationPersonComponent', () => {
  let component: ImmunizationPersonComponent;
  let fixture: ComponentFixture<ImmunizationPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
