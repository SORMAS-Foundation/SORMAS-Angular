import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CaseAddComponent } from './case-add.component';

describe('CaseAddComponent', () => {
  let component: CaseAddComponent;
  let fixture: ComponentFixture<CaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseAddComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
