import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MserAddComponent } from './mser-add.component';

describe('MserAddComponent', () => {
  let component: MserAddComponent;
  let fixture: ComponentFixture<MserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MserAddComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
