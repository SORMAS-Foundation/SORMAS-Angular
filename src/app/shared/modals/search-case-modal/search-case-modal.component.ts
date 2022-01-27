import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Filter } from '../../../_models/common';
import { CaseService } from '../../../_services/api/case.service';

@Component({
  selector: 'app-search-case-modal',
  templateUrl: './search-case-modal.component.html',
  styleUrls: ['./search-case-modal.component.scss'],
})
export class SearchCaseModalComponent implements OnInit {
  filtersForm = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<SearchCaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public caseService: CaseService
  ) {}

  ngOnInit(): void {
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      nameUuidEpidNumberLike: new FormControl(),
    });
  }

  searchCase(): void {
    const filter: Filter = {
      field: 'nameUuidEpidNumberLike',
      value: this.filtersForm.value.nameUuidEpidNumberLike,
    };
    this.caseService.getAll({ offset: null, size: null }, false, [filter], false).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {},
    });
  }

  confirm(): void {}
}
