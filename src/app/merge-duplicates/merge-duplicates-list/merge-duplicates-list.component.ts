import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MERGE_DUPLICATES_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { HEADER_HEIGHT } from '../../_constants/common';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_MERGE_DUPLICATE_FILTERS } from '../merge-duplicate-filters/merge-duplicate-filters-form-data';
import { MergeDuplicateService } from '../../_services/api/mergeDuplicate.service';
import { MergeDuplicateDto } from '../../_models/mergeDuplicateDto';

@Component({
  selector: 'app-merge-duplicates-list',
  templateUrl: './merge-duplicates-list.component.html',
  styleUrls: ['./merge-duplicates-list.component.scss'],
})
export class MergeDuplicatesListComponent implements OnInit, OnDestroy {
  headerHeight = HEADER_HEIGHT;
  formIdFilters = MERGE_DUPLICATES_FILTERS_FORM_ID;
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_MERGE_DUPLICATE_FILTERS));

  private subscriptions: Subscription[] = [];

  public mergeDuplicates: MergeDuplicateDto[];

  constructor(private mergeDuplicatesService: MergeDuplicateService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.mergeDuplicatesService
        .getAll({ offset: null, size: null }, false, null, true)
        .subscribe({
          next: (response: any) => {
            this.mergeDuplicates = response.elements;
          },
          error: () => {},
          complete: () => {},
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscriptions) => subscriptions.unsubscribe());
  }
}
