import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationProfileComponent } from './immunization-profile.component';

describe('ImmunizationProfileComponent', () => {
  let component: ImmunizationProfileComponent;
  let fixture: ComponentFixture<ImmunizationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
