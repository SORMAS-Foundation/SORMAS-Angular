import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsCoordsComponent } from './gps-coords.component';

describe('GpsCoordsComponent', () => {
  let component: GpsCoordsComponent;
  let fixture: ComponentFixture<GpsCoordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpsCoordsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
