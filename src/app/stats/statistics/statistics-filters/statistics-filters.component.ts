import { Component, Input, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormBase, FormElementBase } from '../../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_STATISTICS_FILTERS } from './statistics-filters-form-data';
import { CommunityService } from '../../../_services/api/community.service';
import { DistrictService } from '../../../_services/api/district.service';
import { RegionService } from '../../../_services/api/region.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';
import { AGE_INTERVALS } from './age-intervals-data';
import { Filter } from '../../../_models/common';
import { RegionDto, DistrictDto, CommunityDto } from '../../../_models/models';

@Component({
  selector: 'app-statistics-filters',
  templateUrl: './statistics-filters.component.html',
  styleUrls: ['./statistics-filters.component.scss'],
})
export class StatisticsFiltersComponent implements OnInit, OnDestroy {
  @Input() opened: boolean;

  filtersFormData = FORM_DATA_STATISTICS_FILTERS;
  filtersForm = new FormGroup({});
  filters: Filter[] = [];
  regions: RegionDto[] = [];
  districts: DistrictDto[] = [];
  communities: CommunityDto[] = [];

  subscriptions: Subscription[] = [];

  @ViewChildren('filterOptions') filterOptions: QueryList<any>;

  constructor(
    private filterService: FilterService,
    private regionService: RegionService,
    private districtService: DistrictService,
    private communityService: CommunityService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initFiltersForm();
    this.monitorFields();
    this.monitorReset();
    this.fetchRegions();
    this.fetchDistricts();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      diseases: new FormControl(),
      classifications: new FormControl(),
      outcomes: new FormControl(),
      reportingUserRoles: new FormControl(),
      regions: new FormControl(),
      districts: new FormControl(),
      communities: new FormControl(),
      healthFacilitiesCategory: new FormControl(),
      healthFacilitiesType: new FormControl(),
      healthFacilities: new FormControl(),
      personRegions: new FormControl(),
      personDistricts: new FormControl(),
      personCommunities: new FormControl(),
      personCity: new FormControl(),
      personPostCode: new FormControl(),
      sexes: new FormControl(),
      ageStratification: new FormControl(),
      ageIntervals: new FormControl(),
      onset: new FormControl(),
      onsetYears: new FormControl(),
      onsetQuarters: new FormControl(),
      onsetMonths: new FormControl(),
      onsetEpiWeeks: new FormControl(),
      onsetQuartersOfYear: new FormControl(),
      onsetMonthsOfYear: new FormControl(),
      onsetEpiWeeksOfYear: new FormControl(),
      onsetDateFrom: new FormControl(),
      onsetDateTo: new FormControl(),
      report: new FormControl(),
      reportYears: new FormControl(),
      reportQuarters: new FormControl(),
      reportMonths: new FormControl(),
      reportEpiWeeks: new FormControl(),
      reportQuartersOfYear: new FormControl(),
      reportMonthsOfYear: new FormControl(),
      reportEpiWeeksOfYear: new FormControl(),
      reportDateFrom: new FormControl(),
      reportDateTo: new FormControl(),
      outcome: new FormControl(),
      outcomeYears: new FormControl(),
      outcomeQuarters: new FormControl(),
      outcomeMonths: new FormControl(),
      outcomeEpiWeeks: new FormControl(),
      outcomeQuartersOfYear: new FormControl(),
      outcomeMonthsOfYear: new FormControl(),
      outcomeEpiWeeksOfYear: new FormControl(),
      outcomeDateFrom: new FormControl(),
      outcomeDateTo: new FormControl(),
    });
  }

  monitorFields(): void {
    this.subscriptions.push(
      this.filtersForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
        this.filtersToArray();
      })
    );

    this.watchField('time', 'onsetTime', 'onset');
    this.watchField('time', 'reportTime', 'report');
    this.watchField('time', 'outcomeTime', 'outcome');

    this.watchRegion('place', 'jurisdiction', 'regions', 'districts');
    this.watchRegion('person', 'placeOfResidence', 'personRegions', 'personDistricts');

    this.watchDistrict('place', 'jurisdiction', 'districts', 'communities');
    this.watchDistrict('person', 'placeOfResidence', 'personDistricts', 'personCommunities');

    this.watchAgeStratification();
  }

  monitorReset(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response: any) => {
        if (!response.filters.length && this.filters.length) {
          this.removeAllFilters();
          this.filtersForm.reset();
        }
      })
    );
  }

  watchAgeStratification(): void {
    const control = this.filtersForm.get('ageStratification');

    if (control) {
      this.subscriptions.push(
        control.valueChanges.subscribe((val: string) => {
          const fieldAgeIntervals = this.getField('person', 'ageStratification', 'ageIntervals');
          this.filtersForm.get('ageIntervals')?.reset();
          if (fieldAgeIntervals) {
            fieldAgeIntervals.active = false;
            setTimeout(() => {
              fieldAgeIntervals.active = !!val;
              fieldAgeIntervals.options = AGE_INTERVALS[val] || [];
            }, 0);
          }
        })
      );
    }
  }

  watchField(sectionId: string, groupId: string, fieldKey: string): void {
    const control = this.filtersForm.get(fieldKey);

    if (control) {
      this.subscriptions.push(
        control.valueChanges.subscribe((val) =>
          this.updateDependingFields(sectionId, groupId, fieldKey, val)
        )
      );
    }
  }

  watchRegion(sectionId: string, groupId: string, regionKey: string, districtKey: string): void {
    const control = this.filtersForm.get(regionKey);

    if (control) {
      this.subscriptions.push(
        control.valueChanges.subscribe((val) => {
          this.updateDistrict(sectionId, groupId, districtKey, val);
        })
      );
    }
  }

  watchDistrict(
    sectionId: string,
    groupId: string,
    districtKey: string,
    communityKey: string
  ): void {
    const control = this.filtersForm.get(districtKey);

    if (control) {
      this.subscriptions.push(
        control.valueChanges.subscribe((val) => {
          if (this.communities.length) {
            this.updateCommunity(sectionId, groupId, communityKey, val);
          } else {
            this.fetchCommunitites();
          }
        })
      );
    }
  }

  getSection(sectionId: string): any {
    const section = this.filtersFormData.find((obj) => obj.id === sectionId);
    return section;
  }

  getGroup(sectionId: string, groupId: string | undefined): FormBase<any> {
    const section = this.getSection(sectionId);
    const group = section.data.find((obj: any) => obj.id === groupId);
    return group;
  }

  getField(sectionId: string, groupId: string, fieldKey: string): FormElementBase<any> | undefined {
    const group = this.getGroup(sectionId, groupId);
    const field = group.fields.find((obj) => obj.key === fieldKey);
    return field;
  }

  getDependingFields(sectionId: string, groupId: string, fieldKey: string): FormElementBase<any>[] {
    const group = this.getGroup(sectionId, groupId);
    const fields = group.fields.filter((obj) => obj.dependingOn === fieldKey);
    return fields;
  }

  updateDependingFields(
    sectionId: string,
    groupId: string,
    fieldKey: string,
    period: string
  ): void {
    const fields = this.getDependingFields(sectionId, groupId, fieldKey);
    fields.forEach((field) => {
      // eslint-disable-next-line no-param-reassign
      field.active = field.dependingOnValues?.includes(period) ?? false;
      this.clearFilter(field.key);
    });
  }

  updateOptionsForField(
    sectionId: string,
    groupId: string,
    fieldKey: string,
    options: any[]
  ): void {
    const field = this.getField(sectionId, groupId, fieldKey);
    if (field) {
      field.active = false;
      field.options = options;
      setTimeout(() => {
        field.active = true;
      }, 0);
    }
  }

  updateDistrict(sectionId: string, groupId: string, fieldKey: string, regions: string[]): void {
    const list = regions?.length
      ? this.districts.filter(
          (district) => district.region?.uuid && regions.includes(district.region.uuid)
        )
      : this.districts;
    const options = this.makeOptions(list);
    this.updateOptionsForField(sectionId, groupId, fieldKey, options);
    const control = this.filtersForm.get(fieldKey);
    if (control) {
      const newDistricts = list.map((item) => item.uuid);
      const newValue = control.value?.filter((value: string) => newDistricts.includes(value));
      control.setValue(newValue);
    }
  }

  updateCommunity(sectionId: string, groupId: string, fieldKey: string, districts: string[]): void {
    const list = districts?.length
      ? this.communities.filter(
          (community) => community.district?.uuid && districts.includes(community.district.uuid)
        )
      : [];
    const options = this.makeOptions(list);
    this.updateOptionsForField(sectionId, groupId, fieldKey, options);
    const control = this.filtersForm.get(fieldKey);
    if (control) {
      const newCommunities = list.map((item) => item.uuid);
      const newValue = control.value?.filter((value: string) => newCommunities.includes(value));
      control.setValue(newValue);
    }
  }

  fetchRegions(): void {
    this.subscriptions.push(
      this.regionService.getAll().subscribe({
        next: (response: any) => {
          this.regions = response.elements;
          const options = this.makeOptions(this.regions);
          this.updateOptionsForField('person', 'placeOfResidence', 'personRegions', options);
          this.updateOptionsForField('place', 'jurisdiction', 'regions', options);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchDistricts(): void {
    this.subscriptions.push(
      this.districtService.getAll().subscribe({
        next: (response: any) => {
          this.districts = response.elements;
          const options = this.makeOptions(this.districts);
          this.updateOptionsForField('person', 'placeOfResidence', 'personDistricts', options);
          this.updateOptionsForField('place', 'jurisdiction', 'districts', options);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchCommunitites(): void {
    this.subscriptions.push(
      this.communityService.getAll().subscribe({
        next: (response: any) => {
          this.communities = response.elements;
          this.updateCommunity(
            'place',
            'jurisdiction',
            'communities',
            this.filtersForm.get('districts')?.value || []
          );
          this.updateCommunity(
            'person',
            'placeOfResidence',
            'personCommunities',
            this.filtersForm.get('personDistricts')?.value || []
          );
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
      value: item.name,
    }));
  }

  clearFilter(key: string): void {
    this.filtersForm.get(key)?.reset();
  }

  removeFilter(sectionId: string, groupId: string | undefined): void {
    const group = this.getGroup(sectionId, groupId);

    if (!group) {
      return;
    }

    group.hidden = true;
    group.fields.forEach((field) => {
      this.clearFilter(field.key);
    });
    this.filterOptions.forEach((ref) => {
      ref.deselect(group);
    });
  }

  removeAllFilters(): void {
    this.filtersFormData.forEach((section) => {
      section.data.forEach((group) => {
        this.removeFilter(section.id, group.id);
      });
    });
  }

  addFilter(event: any, sectionId: string): void {
    const section = this.filtersFormData.find((item) => item.id === sectionId);
    section?.data.forEach((item) => {
      const active = !!event.find((obj: any) => obj.id === item.id);
      // eslint-disable-next-line no-param-reassign
      item.hidden = !active;
      if (!active) {
        item.fields.forEach((field: FormElementBase<any>) => {
          this.clearFilter(field.key);
        });
      }
    });
  }

  filtersToArray(): void {
    const result: Filter[] = [];
    Object.entries(this.filtersForm.value).forEach(([key, value]) => {
      if (value === null) {
        return;
      }
      if (Array.isArray(value) && !value.length) {
        return;
      }
      result.push({ field: key, value });
    });
    if (result.length || (!result.length && this.filters.length)) {
      this.filters = result;
      this.filterService.setFilters(this.filters);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
