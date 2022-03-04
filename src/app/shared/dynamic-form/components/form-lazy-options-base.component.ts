/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, pairwise } from 'rxjs/operators';
import { DEFAULT_FETCH_METHOD } from '../../../app.constants';
import { CommunityService } from '../../../_services/api/community.service';
import { ContinentService } from '../../../_services/api/continent.service';
import { CountryService } from '../../../_services/api/country.service';
import { DistrictService } from '../../../_services/api/district.service';
import { EntryPointService } from '../../../_services/api/entry-point.service';
import { FacilityService } from '../../../_services/api/facility.service';
import { RegionService } from '../../../_services/api/region.service';
import { SubcontinentService } from '../../../_services/api/subcontinent.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { HelperService } from '../../../_services/helper.service';
import { FormBaseComponent } from './form-base.component';

@Component({
  selector: 'app-form-lazy-options-base',
  template: ``,
})
export class FormLazyOptionsBaseComponent extends FormBaseComponent implements OnInit, OnDestroy {
  service: any;
  method: string;
  subscriptions: Subscription[] = [];
  enabled: boolean;

  constructor(
    public formActionsService: FormActionsService,
    public continentService: ContinentService,
    public subcontinentService: SubcontinentService,
    public countryService: CountryService,
    public regionService: RegionService,
    public districtService: DistrictService,
    public communityService: CommunityService,
    public entryPointService: EntryPointService,
    public facilityService: FacilityService,
    public helperService: HelperService
  ) {
    super(formActionsService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.enabled = !this.config.disabled;
    this.toggleControl(!!this.config.options.length);

    if (this.config.service) {
      this.service = this[this.config.service as keyof this];
      this.method = this.config.serviceMethod || DEFAULT_FETCH_METHOD;
      this.populateOptions();
    }
  }

  populateOptions(): void {
    // const determinedByProcessed = '';
    const determinantControl: AbstractControl[] | undefined = [];
    if (this.config.determinedBy) {
      this.config.determinedBy.forEach((el) => {
        determinantControl.push(this.group.controls[el.replaceAll('.', '__')]);
      });
    }
    // determinantControl =
    //   this.config.determinedBy &&
    //   this.group.controls[this.config.determinedBy.replaceAll('.', '__')];
    if (!determinantControl || determinantControl.length === 0) {
      console.log('asd', determinantControl);
      this.fetchOptions();
      return;
    }
    console.log('determined', this.config.determinedBy, determinantControl);

    determinantControl.forEach((el) => {
      this.subscriptions.push(
        el.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([, val]) => {
          this.control?.reset();
          this.control?.disable();
          this.config.options = [];
          if (val !== undefined) {
            this.fetchOptions(val);
          }
        })
      );
      if (el.value) {
        this.fetchOptions(el.value);
      }
    });
  }

  fetchOptions(determinantValue?: any): void {
    const filters = this.makeFiltersFromValue(determinantValue);
    console.log('this.method', this.service, this.method);
    this.subscriptions.push(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.service[this.method](filters).subscribe({
        next: (response: any) => {
          this.config.options = response;
          this.toggleControl(!!this.config.options.length);
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  makeFiltersFromValue(val: any): any[] | null {
    const keys: string[] = [];
    this.config.determinedBy?.forEach((el) => {
      keys.push(el);
    });
    if (!keys || keys.length === 0) {
      return null;
    }
    const fields: string[] = [];
    const result: any[] = [];
    const keyMap: string[] = ['country', 'region', 'district', 'community'];
    let filters: any[] = [];
    let filterName: string | undefined = '';
    keys?.forEach((key, i) => {
      fields[i] = this.makeKey(key.replaceAll('.', '__'));
      filters = Object.entries(this.makeObject(fields[i], val))[0];
      filterName = keyMap.find((item) => key.toLowerCase().includes(item));

      result.push({
        field: filterName,
        value: filters[1],
      });
    });

    return result;
  }

  makeKey(key: string): string {
    const keyMap = ['country', 'region', 'district', 'community'];
    const test = keyMap.find((item) => key.toLowerCase().includes(item));
    if (!test) {
      return key;
    }
    const index = key.toLowerCase().indexOf(test);
    let result = key.substr(index);
    result = result[0].toLowerCase() + result.slice(1);
    return result;
  }

  makeObject(path: string, value: string): any {
    const result: any = {};
    const arr = path.split('__');
    let obj: any = result;
    for (let i = 0; i < arr.length - 1; i += 1) {
      obj[arr[i]] = {};
      obj = obj[arr[i]];
    }
    obj[arr[arr.length - 1]] = value;
    return result;
  }

  toggleControl(active: boolean): void {
    if (!this.enabled) {
      return;
    }
    if (active) {
      this.control?.enable();
    } else {
      this.control?.disable();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
