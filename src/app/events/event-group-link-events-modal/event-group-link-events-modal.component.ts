import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TableAppearanceOptions } from '../../_constants/enums';
import { EVENT_GROUP_LINK_EVENT_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { Filter, TableColumn } from '../../_models/common';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { FORM_DATA_EVENT_GROUP_LINK_EVENT_FILTERS } from '../event-group-link-events-modal-filters/event-group-link-events-modal-filters-form-data';
import { defaultColumnDefs } from './event-group-link-events-modal-table-data';

@Component({
  selector: 'app-event-group-link-events-modal',
  templateUrl: './event-group-link-events-modal.component.html',
  styleUrls: ['./event-group-link-events-modal.component.scss'],
})
export class EventGroupLinkEventsModalComponent implements OnInit {
  defaultColumns: TableColumn[] = [];
  filtersForm = new FormGroup({});
  selectedEvent: EventDto | null;
  presetFilters: Filter[];
  tableAppearanceOptions = TableAppearanceOptions;
  filtersData: FormBase<any>[] = JSON.parse(
    JSON.stringify(FORM_DATA_EVENT_GROUP_LINK_EVENT_FILTERS)
  );
  formId = EVENT_GROUP_LINK_EVENT_FILTERS_FORM_ID;

  constructor(
    public dialogRef: MatDialogRef<EventGroupLinkEventsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eventService: EventService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.presetFilters = [
      {
        field: 'excludedUuids',
        value: this.data.excludeIds,
      },
    ];
  }

  onSelectEvent(event: any): void {
    this.selectedEvent = null;
    if (event.selected.length) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedEvent = event.selected[0];
    }
  }

  confirm(): void {
    this.dialogRef.close({
      selectedEvent: this.selectedEvent,
    });
  }
}
