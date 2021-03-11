import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Resource } from '../../_models/resource';

import * as constants from '../../app.constants';
import { Sorting } from '../../_models/common';
import {NotificationService} from '../../_services/notification.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss'],
})
export class Table2Component implements OnInit {
  page = constants.PAGE_SIZE;
  limit = constants.PAGE_SIZE;

  caseSorting: Sorting;

  sortBool = false;

  @Input() tableData: Resource[] = [];
  @Input() tableColumns: string[] = [];
  @Input() resourceService: any;

  @Output() selectRow: EventEmitter<any> = new EventEmitter();

  constructor(
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
  }

  onSelectRow(resource: Resource): void {
    this.selectRow.emit({
      id: resource.id
    });
  }

  getResources(reset: boolean = false): any {
    this.resourceService.getAll({ page: this.page, size: this.limit }, this.caseSorting).subscribe({
      next: (response: any) => {
        if (reset) {
          this.page = 0;
          this.tableData = response.elements;
        } else {
          this.page += this.limit;
          this.tableData = this.tableData.concat(response.elements);
        }
      },
      error: (err: any) => {
        this.notificationService.error(err)
      },
      complete: () => {},
    });
  }

  onTableScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.getResources();
    }
  }

  sort(): void {
    this.caseSorting = {
      field: 'uuid',
      ascending: this.sortBool
    };

    this.getResources(true);

    this.sortBool = !this.sortBool;
  }
}
