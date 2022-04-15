/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { DEFAULT_FETCH_METHOD } from '../../../app.constants';
import { Filter } from '../../../_models/common';
import { CommunityService } from '../../../_services/api/community.service';
import { ContinentService } from '../../../_services/api/continent.service';
import { CountryService } from '../../../_services/api/country.service';
import { DistrictService } from '../../../_services/api/district.service';
import { EntryPointService } from '../../../_services/api/entry-point.service';
import { FacilityService } from '../../../_services/api/facility.service';
import { RegionService } from '../../../_services/api/region.service';
import { SubcontinentService } from '../../../_services/api/subcontinent.service';
import { UserService } from '../../../_services/api/user.service';
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
  private determinantValues: any = {};
  private watchDeterminants: BehaviorSubject<any>;

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
    public helperService: HelperService,
    public userService: UserService
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

  validateFilters(filters: any): boolean {
    return Object.entries(filters).every(([key, value]) => {
      const dependency = this.config.determinedBy?.find((item) => item.key === key);
      if (dependency?.optional) {
        return true;
      }
      if (value === null || value === undefined) {
        return false;
      }
      return true;
    });
  }

  populateOptions(): void {
    this.config.determinedBy?.forEach((dependency) => {
      const determinantControl = this.group.controls[dependency.key.replaceAll('.', '__')];
      if (determinantControl) {
        this.determinantValues[dependency.key] = determinantControl.value;
        this.subscriptions.push(
          determinantControl.valueChanges.pipe(distinctUntilChanged()).subscribe((val) => {
            this.control?.reset();
            this.control?.disable();
            this.config.options = [];
            this.determinantValues[dependency.key] = val;
            this.watchDeterminants.next(this.determinantValues);
          })
        );
      }
    });

    if (this.config.determinedBy?.length) {
      this.watchFields();
    } else {
      this.fetchOptions();
    }
  }

  watchFields(): void {
    this.watchDeterminants = new BehaviorSubject(this.determinantValues);
    this.subscriptions.push(
      this.watchDeterminants
        .pipe(filter((val) => this.validateFilters(val)))
        .subscribe(() => this.fetchOptions())
    );
  }

  fetchOptions(): void {
    const filters = this.makeFilters();
    this.subscriptions.push(
      this.service[this.method](filters).subscribe({
        next: (response: any) => {
          this.config.options = response;
          if (this.config.fallbackOption) {
            this.config.options.push({
              key: this.config.fallbackOption.fallbackOptionKey,
              value: this.config.fallbackOption.fallbackOptionValue,
            });
          }
          this.toggleControl(!!this.config.options.length);
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  makeFilters(): Filter[] | null {
    if (!this.config.determinedBy?.length) {
      return null;
    }
    return Object.entries(this.determinantValues)
      .filter(([, val]) => !!val)
      .map(([key, val]) => {
        const dependency = this.config.determinedBy?.find((item) => item.key === key);
        const [field, value] = Object.entries(this.makeObject(dependency?.keyMap || key, val))[0];
        return {
          field,
          value,
        };
      });
  }

  makeObject(path: string, value: unknown): any {
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
