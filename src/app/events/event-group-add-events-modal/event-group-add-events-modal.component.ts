import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter, TableColumn } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';
import { EventGroupService } from '../../_services/api/event-group.service';
import { EventGroupsIndexDto } from '../../_models/eventGroupsIndexDto';
import { TableAppearanceOptions } from '../../_constants/enums';
import { defaultColumnDefs } from './event-group-add-events-modal-table-data';

@Component({
  selector: 'app-event-group-add-events-modal',
  templateUrl: './event-group-add-events-modal.component.html',
  styleUrls: ['./event-group-add-events-modal.component.scss'],
})
export class EventGroupAddEventsModalComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  filtersForm = new FormGroup({});
  selectedEventGroup: EventGroupsIndexDto | null;
  tableAppearanceOptions = TableAppearanceOptions;

  constructor(
    public dialogRef: MatDialogRef<EventGroupAddEventsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eventGroupService: EventGroupService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      searchEventGroup: new FormControl(),
    });
  }

  filtersToArray(): void {
    const filter: Filter = {
      field: 'searchEventGroup',
      value: this.filtersForm.value.searchEventGroup,
    };
    this.filterService.setFilters([filter]);
  }

  onSelectEventGroup(event: any): void {
    this.selectedEventGroup = null;
    if (event.selected.length) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedEventGroup = event.selected[0];
    }
  }

  onFormChange(): void {
    this.filtersToArray();
  }

  confirm(): void {
    this.dialogRef.close({
      selectedEventGroup: this.selectedEventGroup,
    });
  }

  newEventGroup(): void {
    this.dialogRef.close({
      selectedEventGroup: null,
    });
  }
}
