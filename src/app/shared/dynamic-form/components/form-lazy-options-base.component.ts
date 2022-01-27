/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnDestroy, OnInit } from '@angular/core';
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
    const determinantControl =
      this.config.determinedBy && this.group.controls[this.config.determinedBy];
    if (!determinantControl) {
      this.fetchOptions();
      return;
    }
    this.subscriptions.push(
      determinantControl.valueChanges
        .pipe(distinctUntilChanged(), pairwise())
        .subscribe(([, val]) => {
          this.control?.reset();
          this.control?.disable();
          this.config.options = [];
          if (val !== undefined) {
            this.fetchOptions(val);
          }
        })
    );
    if (determinantControl.value) {
      this.fetchOptions(determinantControl.value);
    }
  }

  fetchOptions(determinantValue?: any): void {
    const filters = this.makeFiltersFromValue(determinantValue);

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
    const key = this.config.determinedBy;
    if (!key) {
      return null;
    }
    const field = this.makeKey(key);
    const filters = Object.entries(this.makeObject(field, val))[0];
    return [
      {
        field: filters[0],
        value: filters[1],
      },
    ];
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
    const arr = path.split('.');
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
