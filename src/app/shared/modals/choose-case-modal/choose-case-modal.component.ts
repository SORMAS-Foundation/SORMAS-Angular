import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { CaseService } from '../../../_services/api/case.service';
import { defaultColumnDefs } from './choose-case-modal-table-data';
import { Filter, TableColumn } from '../../../_models/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { FilterService } from '../../../_services/filter.service';

@Component({
  selector: 'app-choose-case-modal',
  templateUrl: './choose-case-modal.component.html',
  styleUrls: ['./choose-case-modal.component.scss'],
})
export class ChooseCaseModalComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  tableAppearanceOptions = TableAppearanceOptions;

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

  onFormChange(): void {
    this.filtersToArray();
  }

  confirm(): void {
    console.log('confirm');
  }

  cancel(): void {
    console.log('cancel');
  }
}
