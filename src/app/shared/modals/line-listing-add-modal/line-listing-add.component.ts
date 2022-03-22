import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBase } from '../../dynamic-form/types/form-element-base';
import { ListingService } from '../../../_services/api/listing.service';
import { FormActionsService } from '../../../_services/form-actions.service';

@Component({
  selector: 'app-line-listing-add',
  templateUrl: './line-listing-add.component.html',
  styleUrls: ['./line-listing-add.component.scss'],
})
export class LineListingAddComponent implements OnInit {
  myFormElements: FormBase<any>[];
  formId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formActionsService: FormActionsService,
    public listingService: ListingService
  ) {}

  ngOnInit(): void {
    this.formId = this.data.formId;
    this.myFormElements = JSON.parse(JSON.stringify(this.data.formData ?? {}));
  }

  save(): void {
    this.formActionsService.setSave(this.formId, null);
  }
}
