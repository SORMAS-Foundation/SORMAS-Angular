import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationListComponent } from './immunization-list.component';

describe('ImmunizationListComponent', () => {
  let component: ImmunizationListComponent;
  let fixture: ComponentFixture<ImmunizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
