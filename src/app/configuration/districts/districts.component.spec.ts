/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsComponent } from './districts.component';

describe('DistrictsComponent', () => {
  let component: DistrictsComponent;
  let fixture: ComponentFixture<DistrictsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DistrictsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
