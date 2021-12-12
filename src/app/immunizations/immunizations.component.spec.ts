import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationsComponent } from './immunizations.component';

describe('ImmunizationsComponent', () => {
  let component: ImmunizationsComponent;
  let fixture: ComponentFixture<ImmunizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
