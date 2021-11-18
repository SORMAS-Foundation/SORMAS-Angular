import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { EventGroupService } from '../../../_services/api/event-group.service';
import { viewOptionsDefs } from './event-groups-list-action-data';
import { defaultColumnDefs } from './event-groups-list-table-data';

@Component({
  selector: 'app-event-groups-list',
  templateUrl: './event-groups-list.component.html',
  styleUrls: ['./event-groups-list.component.scss'],
})
export class EventGroupsListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsViewOption: NavItem[] = viewOptionsDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  private subscription: Subscription[] = [];
  constructor(public eventGroupService: EventGroupService, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
