import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabMessageComponent } from './lab-message.component';

describe('LabMessageComponent', () => {
  let component: LabMessageComponent;
  let fixture: ComponentFixture<LabMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
