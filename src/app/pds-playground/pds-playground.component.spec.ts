import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsPlaygroundComponent } from './pds-playground.component';

describe('PdsPlaygroundComponent', () => {
  let component: PdsPlaygroundComponent;
  let fixture: ComponentFixture<PdsPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdsPlaygroundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
