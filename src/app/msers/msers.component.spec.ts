import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsersComponent } from './msers.component';

describe('MsersComponent', () => {
  let component: MsersComponent;
  let fixture: ComponentFixture<MsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
