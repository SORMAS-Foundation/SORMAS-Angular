import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSelectHarness } from '@angular/material/select/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LocaleSelectComponent } from './locale-select.component';
import { SharedModule } from '../shared.module';
import { localeOptions } from './shared/localeOptions';

let loader: HarnessLoader;

describe('LocaleSelectComponent', () => {
  let component: LocaleSelectComponent;
  let fixture: ComponentFixture<LocaleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [LocaleSelectComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LocaleSelectComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);

    component.selectLocale = () => {};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a select comp', async () => {
    const select = await loader.getHarness(MatSelectHarness);

    expect(select).toBeTruthy();
  });

  it('on open select displays correct options', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    spyOn(component, 'selectLocale');

    await Promise.all(
      localeOptions
        .map((l) => l.lang)
        .map(async (lang) => {
          const options = await select.getOptions({
            text: lang,
          });

          expect(options[0]).toBeDefined();
        })
    );
  });

  it('can select new locale', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    spyOn(component, 'selectLocale');

    const options = await select.getOptions({
      text: 'French',
    });

    expect(options[0]).toBeDefined();
    await options[0].click();

    expect(component.selectLocale).toHaveBeenCalledTimes(1);
  });

  it('can select any language', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    spyOn(component, 'selectLocale');

    await Promise.all(
      localeOptions
        .map((l) => l.lang)
        .map(async (lang) => {
          const options = await select.getOptions({
            text: lang,
          });

          expect(options[0]).toBeDefined();
          await options[0].click();
        })
    );

    expect(component.selectLocale).toHaveBeenCalledTimes(3);
  });
});
