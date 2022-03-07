import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { PeriodPickerComponent } from './period-picker.component';

describe('PeriodPickerComponent', () => {
  let component: PeriodPickerComponent;
  let fixture: ComponentFixture<PeriodPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodPickerComponent],
      imports: [MaterialModule, TranslateModule.forRoot(), BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
