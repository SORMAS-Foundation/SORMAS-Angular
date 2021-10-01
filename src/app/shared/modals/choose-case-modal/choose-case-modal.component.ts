import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { CaseService } from '../../../_services/api/case.service';
import { defaultColumnDefs } from './choose-case-modal-table-data';
import { Filter, TableColumn } from '../../../_models/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { FilterService } from '../../../_services/filter.service';
import { CaseDataDto } from '../../../_models/caseDataDto';

@Component({
  selector: 'app-choose-case-modal',
  templateUrl: './choose-case-modal.component.html',
  styleUrls: ['./choose-case-modal.component.scss'],
})
export class ChooseCaseModalComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  tableAppearanceOptions = TableAppearanceOptions;
  selectedCase: CaseDataDto | null;
  filtersForm = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<ChooseCaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public caseService: CaseService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      nameUuidEpidNumberLike: new FormControl(),
    });
  }

  filtersToArray(): void {
    const filter: Filter = {
      field: 'nameUuidEpidNumberLike',
      value: this.filtersForm.value.nameUuidEpidNumberLike,
    };
    this.filterService.setFilters([filter]);
  }

  onSelectCase(event: any): void {
    this.selectedCase = null;
    if (event.selected.length) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedCase = event.selected[0];
    }
  }

  onFormChange(): void {
    this.filtersToArray();
  }

  confirm(): void {
    this.dialogRef.close({
      selectedCase: this.selectedCase,
    });
  }
}
