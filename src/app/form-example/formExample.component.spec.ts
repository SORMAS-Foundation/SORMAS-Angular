import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormExampleComponent } from './formExample.component';

describe('FormsComponent', () => {
  let component: FormExampleComponent;
  let fixture: ComponentFixture<FormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
