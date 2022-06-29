import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { debounceTime, filter, startWith } from 'rxjs/operators';
import { Sex } from '../../../app.constants';
import { CommunityService } from '../../../_services/api/community.service';
import { FacilityService } from '../../../_services/api/facility.service';
import { HelperService } from '../../../_services/helper.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-line-listing-new-cases',
  templateUrl: './line-listing-new-cases.component.html',
  styleUrls: ['./line-listing-new-cases.component.scss'],
})
export class LineListingNewCasesComponent implements OnInit, AfterViewInit, OnDestroy {
  config: FormElementBase<any>;
  group: UntypedFormGroup;
  formId: string;

  containerWidth: number;
  actualWidth: number;
  showform = false;
  optionsYears: any[] = [];
  optionsMonths: any[] = [];
  optionsDays: any[] = [];
  optionsSex = Sex;
  communities: any[] = [];
  facilities: any[] | undefined;
  today = new Date();
  subscriptions: Subscription[] = [];

  @ViewChild('container') container: ElementRef;

  constructor(
    private communityService: CommunityService,
    private facilityService: FacilityService,
    public helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.optionsYears = this.helperService.getYears();
    this.optionsMonths = this.helperService.getMonths();
    this.group.setControl(this.config.key, new UntypedFormArray([]));
    this.monitorFormChanges();
    this.addCase();
  }

  async ngAfterViewInit(): Promise<void> {
    const pause = () => new Promise((resolve) => setTimeout(resolve));
    const containerWidth = this.container.nativeElement.offsetWidth;
    await pause();
    this.showform = true;
    await pause();
    const actualWidth = this.container.nativeElement.offsetWidth;

    this.containerWidth = containerWidth;
    this.actualWidth = actualWidth;
  }

  get cases(): UntypedFormArray {
    return this.group.get(this.config.key) as UntypedFormArray;
  }

  addCase(): void {
    this.cases.push(
      new UntypedFormGroup({
        id: new UntypedFormControl(this.getUuid()),
        reportDate: new UntypedFormControl(null, [Validators.required]),
        community: new UntypedFormControl(),
        healthFacility: new UntypedFormControl(null, [Validators.required]),
        healthFacilityDetails: new UntypedFormControl(null, [this.ValidateFacilityName()]),
        firstName: new UntypedFormControl(null, [Validators.required]),
        lastName: new UntypedFormControl(null, [Validators.required]),
        birthDateDD: new UntypedFormControl(),
        birthDateMM: new UntypedFormControl(),
        birthDateYYYY: new UntypedFormControl(),
        sex: new UntypedFormControl(null, [Validators.required]),
        onsetDate: new UntypedFormControl(),
      })
    );
    const index = this.cases.length - 1;
    const newCase = this.cases.at(index);
    const $watchCommunity = newCase.get('community')?.valueChanges;
    const $watchYears = newCase.get('birthDateYYYY')?.valueChanges;
    const $watchMonths = newCase.get('birthDateMM')?.valueChanges;
    const $watchHealthFacility = newCase.get('healthFacility')?.valueChanges;
    if ($watchCommunity) {
      this.subscriptions.push(
        $watchCommunity.subscribe(() => {
          newCase.get('healthFacility')?.setValue(null);
        })
      );
    }
    if ($watchYears && $watchMonths) {
      combineLatest([$watchYears.pipe(startWith(undefined)), $watchMonths]).subscribe(
        ([year, month]: any) => {
          this.optionsDays[newCase.value.id] = this.helperService.getDaysForMonth(month, year);
          const $controlBirthDay = newCase.get('birthDateDD');
          const checkDay = this.optionsDays[newCase.value.id].find(
            (item: any) => item.key === $controlBirthDay?.value
          );
          if ($controlBirthDay?.value && !checkDay) {
            $controlBirthDay?.setValue(null);
          }
        }
      );
    }
    if ($watchHealthFacility) {
      this.subscriptions.push(
        $watchHealthFacility.subscribe(() => {
          newCase.get('healthFacilityDetails')?.updateValueAndValidity();
        })
      );
    }
  }

  removeCase(index: number): void {
    this.cases.removeAt(index);
  }

  ValidateFacilityName(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const healthFacility = control.parent?.get('healthFacility')?.value;
      if (healthFacility !== 'OTHER_FACILITY') {
        return null;
      }
      return control.value ? null : { missingValue: control.value };
    };
  }

  monitorFormChanges(): void {
    const $watchRegion = this.group.get('region__uuid')?.valueChanges;
    const $watchDistrict = this.group.get('district__uuid')?.valueChanges;
    const $watchFaciltyCategory = this.group.get('facilityTypeGroup')?.valueChanges;
    const $watchFacilityType = this.group.get('facilityType')?.valueChanges;

    if ($watchRegion && $watchDistrict) {
      this.subscriptions.push(
        combineLatest([$watchRegion, $watchDistrict])
          .pipe(debounceTime(300))
          .pipe(
            filter((values) => {
              this.resetAllFieldsByName('community');
              this.communities = [];
              return values.every(Boolean);
            })
          )
          .subscribe(([region, district]: any) => this.fetchCommunities(region, district))
      );
    }

    if ($watchRegion && $watchDistrict && $watchFaciltyCategory && $watchFacilityType) {
      this.subscriptions.push(
        combineLatest([$watchRegion, $watchDistrict, $watchFaciltyCategory, $watchFacilityType])
          .pipe(debounceTime(300))
          .pipe(
            filter((values) => {
              this.resetAllFieldsByName('healthFacility');
              this.facilities = undefined;
              return values.every(Boolean);
            })
          )
          .subscribe(([region, district, category, type]) =>
            this.fetchFacilities(region, district, category, type)
          )
      );
    }
  }

  fetchCommunities(region: string, district: string): void {
    const filters = [
      {
        field: 'region',
        value: {
          uuid: region,
        },
      },
      {
        field: 'district',
        value: {
          uuid: district,
        },
      },
    ];
    this.subscriptions.push(
      this.communityService.getAll(null, null, filters).subscribe((data) => {
        this.communities = data.elements;
      })
    );
  }

  fetchFacilities(region: string, district: string, typeGroup: string, type: string): void {
    const filters = [
      {
        field: 'region',
        value: {
          uuid: region,
        },
      },
      {
        field: 'district',
        value: {
          uuid: district,
        },
      },
      {
        field: 'typeGroup',
        value: typeGroup,
      },
      {
        field: 'type',
        value: type,
      },
    ];
    this.subscriptions.push(
      this.facilityService.getAll(null, null, filters).subscribe((data) => {
        this.facilities = data.elements;
      })
    );
  }

  resetAllFieldsByName(name: string): void {
    for (let i = 0; i < this.cases.length; i += 1) {
      const line = this.cases.at(i);
      line.get(name)?.reset();
    }
  }

  getUuid(): string {
    return `${Math.random().toString(16).slice(2)}-${new Date().getTime()}`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
