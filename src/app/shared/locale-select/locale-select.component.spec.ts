import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSelectComponent } from './locale-select.component';

const supportedLocales = ['en-US', 'fr', 'de'];

describe('LocaleSelectComponent', () => {
  let component: LocaleSelectComponent;
  let fixture: ComponentFixture<LocaleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocaleSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain locale options & label', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('label').textContent).toBe('Select language');

    supportedLocales.forEach((locale) => {
      expect(compiled.innerHTML).toContain(locale);
    });
  });
});
