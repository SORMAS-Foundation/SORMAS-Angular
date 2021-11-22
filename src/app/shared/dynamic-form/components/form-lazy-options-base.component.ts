import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, pairwise } from 'rxjs/operators';
import { CommunityService } from '../../../_services/api/community.service';
import { DistrictService } from '../../../_services/api/district.service';
import { RegionService } from '../../../_services/api/region.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormBaseComponent } from './form-base.component';

@Component({
  selector: 'app-form-lazy-options-base',
  template: ``,
})
export class FormLazyOptionsBaseComponent extends FormBaseComponent implements OnInit, OnDestroy {
  service: any;
  subscriptions: Subscription[] = [];

  constructor(
    public formActionsService: FormActionsService,
    public regionService: RegionService,
    public districtService: DistrictService,
    public communityService: CommunityService
  ) {
    super(formActionsService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.toggleControl(!!this.config.options.length);

    if (this.config.service) {
      this.service = this[this.config.service as keyof this];
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
          if (val) {
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
      this.service.getAll(null, null, filters).subscribe({
        next: (response: any) => {
          this.config.options = this.makeOptions(response.elements);
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
    const makeObject = (path: string, value: string) => {
      const result: any = {};
      const arr = path.split('.');
      let obj: any = result;
      for (let i = 0; i < arr.length - 1; i += 1) {
        obj[arr[i]] = {};
        obj = obj[arr[i]];
      }
      obj[arr[arr.length - 1]] = value;
      return result;
    };
    const filters = Object.entries(makeObject(key, val))[0];
    return [
      {
        field: this.makeKey(filters[0]),
        value: filters[1],
      },
    ];
  }

  makeKey(key: string): string {
    const keyMap = ['country', 'region', 'district', 'community'];
    const result = keyMap.find((item) => key.toLowerCase().includes(item));
    return result ?? key;
  }

  makeOptions(list: any[]): any[] {
    return list.map((item: any) => ({
      key: item.uuid,
      value: item.name || item.displayName,
    }));
  }

  toggleControl(active: boolean): void {
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
