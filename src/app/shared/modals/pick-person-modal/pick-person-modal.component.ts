import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableAppearanceOptions } from '../../../app.constants';
import { Filter, TableColumn } from '../../../_models/common';
import { PersonDto } from '../../../_models/models';
import { PersonService } from '../../../_services/api/person.service';
import { FilterService } from '../../../_services/filter.service';
import { defaultColumnDefs } from './pick-person-modal-table-data';

@Component({
  selector: 'app-pick-person-modal',
  templateUrl: './pick-person-modal.component.html',
  styleUrls: ['./pick-person-modal.component.scss'],
})
export class PickPersonModalComponent implements OnInit {
  formId = 'pickPerson';
  defaultColumns: TableColumn[] = [];
  presetFilters: Filter[] = [];
  form: FormGroup;
  selection: PersonDto | null;
  action: string = 'MATCHING_PERSON';
  tableAppearanceOptions = TableAppearanceOptions;
  disableTable = false;

  constructor(
    public dialogRef: MatDialogRef<PickPersonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public personService: PersonService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.presetFilters = [
      {
        field: 'nameAddressPhoneEmailLike',
        value: 'test',
      },
    ];
    this.defaultColumns = defaultColumnDefs;
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.form = new FormGroup({
      action: new FormControl(this.action),
      firstName: new FormControl(this.data.person.firstName),
      lastName: new FormControl(this.data.person.lastName),
      uuidExternalIdExternalTokenLike: new FormControl(),
    });
  }

  filtersToArray(): void {
    const filter: Filter = {
      field: 'nameUuidEpidNumberLike',
      value: this.form.value.nameUuidEpidNumberLike,
    };
    this.filterService.setFilters([filter]);
  }

  onSelectEvent(event: any): void {
    this.selection = null;
    if (event.selected.length) {
      // eslint-disable-next-line prefer-destructuring
      this.selection = event.selected[0];
    }
  }

  onAction(event: any): void {
    this.action = event.value;
    this.disableTable = this.action === 'CREATE_PERSON';
  }

  onFormChange(): void {
    console.log(this.form.value);
  }

  confirm(): void {
    this.dialogRef.close({
      selection: this.selection,
    });
  }
}
