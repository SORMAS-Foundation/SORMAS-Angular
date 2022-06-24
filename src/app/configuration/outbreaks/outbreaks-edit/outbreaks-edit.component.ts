import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DistrictService } from '../../../_services/api/district.service';
import { DistrictDto } from '../../../_models/districtDto';

@Component({
  selector: 'app-outbreaks-edit-modal',
  templateUrl: './outbreaks-edit.component.html',
  styleUrls: ['./outbreaks-edit.component.scss'],
})
export class OutbreaksEditComponent implements OnInit, OnDestroy {
  form = new UntypedFormGroup({});
  districts: DistrictDto[] = [];
  affectedDistrictsCount = 0;
  totalDistrictsCount = 0;
  subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<OutbreaksEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private districtService: DistrictService,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const filters = [
      {
        field: 'region',
        value: {
          uuid: this.data.region?.uuid,
        },
      },
    ];
    this.subscriptions.push(
      this.districtService.getAll(null, null, filters).subscribe((response: any) => {
        this.districts = response.elements;
        this.totalDistrictsCount = this.districts.length;
        this.createForm();
      })
    );
    this.subscriptions.push(
      this.form.valueChanges.subscribe((raw) => {
        this.affectedDistrictsCount = Object.values(raw).filter(Boolean).length;
      })
    );
  }

  createForm(): void {
    this.districts.forEach((district) => {
      if (district.uuid) {
        this.form.addControl(
          district.uuid,
          new UntypedFormControl(this.isDistrictAffected(district.uuid))
        );
      }
    });
  }

  isDistrictAffected(uuid: string): boolean {
    return !!this.data.outbreaks?.find((item: any) => item.uuid === uuid);
  }

  isDistrictSelected(uuid: string): boolean {
    const control = this.form.get(uuid);
    return !!control?.value;
  }

  setStatusAll(status: boolean): void {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key)?.setValue(status);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
