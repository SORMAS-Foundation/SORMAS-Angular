import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommunityService } from '../../../_services/api/community.service';
import { CountryService } from '../../../_services/api/country.service';
import { DistrictService } from '../../../_services/api/district.service';
import { RegionService } from '../../../_services/api/region.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { NotificationService } from '../../../_services/notification.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-location-dropdowns',
  templateUrl: './location-dropdowns.component.html',
  styleUrls: ['./location-dropdowns.component.scss'],
})
export class LocationDropdownsComponent implements OnInit, OnDestroy {
  config: FormElementBase<string>;
  group: FormGroup;

  data: any;
  fields: string[] = [];
  locationForm = new FormGroup({});

  subscriptions: Subscription[] = [];

  constructor(
    public countryService: CountryService,
    public regionService: RegionService,
    public districtService: DistrictService,
    public communityService: CommunityService,
    private notificationService: NotificationService,
    private formActionService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.data = this.config?.widgetInfo || {};
    this.fields = Object.keys(this.data);
    this.createForm();
    this.populateOptions();
  }

  createForm(): void {
    this.fields.forEach((field) => {
      const originalControl = this.group.controls[this.data[field].key];
      this.locationForm.addControl(field, new FormControl(originalControl?.value));
      if (this.data[field].disabled) {
        this.locationForm.controls[field].disable();
      }
      const control = this.locationForm.get(field);
      if (control) {
        this.subscriptions.push(
          control.valueChanges.subscribe((val: any) => {
            originalControl?.setValue(val);
            this.formActionService.setInputChange(this.data[field].key, true);
            this.updateDependents(field, val);
          })
        );
      }
    });
    this.subscriptions.push(this.formActionService.getDiscard().subscribe(() => this.resetForm()));
  }

  resetForm(): void {
    this.fields.forEach((field) => {
      const originalControl = this.group.controls[this.data[field].key];
      this.data[field].options = [];
      this.locationForm.get(field)?.setValue(originalControl?.value, { emitEvent: false });
    });
    this.populateOptions();
  }

  populateOptions(): void {
    this.fields.forEach((field) => {
      const control = this.locationForm.controls[field];
      if (!control) {
        return;
      }
      const dependeeControl = this.locationForm.controls[this.data[field].dependingOn];
      if (!dependeeControl || dependeeControl?.value) {
        this.fetchDataForField(
          field,
          this[`${field}Service` as keyof this],
          dependeeControl?.value
        );
      }
    });
  }

  fetchDataForField(field: string, service: any, dependee?: string): void {
    let filters = null;
    if (dependee) {
      filters = [
        {
          field: this.data[field].dependingOn,
          value: { uuid: dependee },
        },
      ];
    }
    this.subscriptions.push(
      service.getAll(null, null, filters).subscribe({
        next: (response: any) => {
          this.data[field].options = this.makeOptions(response.elements);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  makeOptions(list: any[]): any[] {
    return list.map((item: any) => ({
      key: item.uuid,
      value: item.name || item.displayName,
    }));
  }

  updateDependents(field: string, uuid: string): void {
    const dependents = this.fields.filter((item) => this.data[item].dependingOn === field);
    dependents.forEach((item: string) => {
      const control = this.locationForm.get(item);
      this.data[item].options = [];
      control?.setValue(undefined);
      if (uuid) {
        this.fetchDataForField(item, this[`${item}Service` as keyof this], uuid);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
