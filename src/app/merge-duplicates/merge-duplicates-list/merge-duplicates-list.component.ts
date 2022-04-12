import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MERGE_DUPLICATES_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { EXPORT_CUSTOM_MODAL_WIDTH, HEADER_HEIGHT } from '../../_constants/common';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_MERGE_DUPLICATE_FILTERS } from '../merge-duplicate-filters/merge-duplicate-filters-form-data';
import { MergeDuplicateService } from '../../_services/api/mergeDuplicate.service';
import { MergeDuplicateDto } from '../../_models/mergeDuplicateDto';
import { MergeDuplicatesCaseGuideComponent } from '../merge-duplicates-case-guide/merge-duplicates-case-guide.component';

@Component({
  selector: 'app-merge-duplicates-list',
  templateUrl: './merge-duplicates-list.component.html',
  styleUrls: ['./merge-duplicates-list.component.scss'],
})
export class MergeDuplicatesListComponent implements OnInit, OnDestroy {
  headerHeight = HEADER_HEIGHT;
  formIdFilters = MERGE_DUPLICATES_FILTERS_FORM_ID;
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_MERGE_DUPLICATE_FILTERS));
  type: string;

  private subscriptions: Subscription[] = [];

  public mergeDuplicates: MergeDuplicateDto[];

  constructor(
    private mergeDuplicatesService: MergeDuplicateService,
    private dialog: MatDialog,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.type = routeParams.type;
  }

  openMergeDuplicatesCaseGuide(): void {
    this.dialog.open(MergeDuplicatesCaseGuideComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscriptions) => subscriptions.unsubscribe());
  }
}
