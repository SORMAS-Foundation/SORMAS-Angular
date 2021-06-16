import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule}  from '@angular/common/http/testing';
import { CaseEditComponent } from './case-edit.component';

describe('CaseEditComponent', () => {
  let component: CaseEditComponent;
  let fixture: ComponentFixture<CaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseEditComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
