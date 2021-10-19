import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontinentAddEditComponent } from './subcontinent-add-edit.component';

describe('SubcontinentAddEditComponent', () => {
  let component: SubcontinentAddEditComponent;
  let fixture: ComponentFixture<SubcontinentAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcontinentAddEditComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontinentAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
