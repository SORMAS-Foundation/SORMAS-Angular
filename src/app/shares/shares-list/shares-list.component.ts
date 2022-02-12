import { Component } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './shares-list-table-data';
import { CONFIG_SHARE_REQUESTS, SHARE_REQUEST_FILTERS_FORM_ID } from '../../app.constants';
import { ShareRequestService } from '../../_services/api/share-request.service';

@Component({
  selector: 'app-shares-list',
  templateUrl: './shares-list.component.html',
  styleUrls: ['./shares-list.component.scss'],
})
export class SharesListComponent {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  configKey = CONFIG_SHARE_REQUESTS;
  formId = SHARE_REQUEST_FILTERS_FORM_ID;

  constructor(public shareRequestService: ShareRequestService) {}
}
