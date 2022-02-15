import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TableColumn } from '../../_models/common';
import { ShareRequestService } from '../../_services/api/share-request.service';
import { CaseDataDto } from '../../_models/caseDataDto';
import { ContactDto } from '../../_models/contactDto';
import { defaultColumnCasesDefs } from './share-cases-table-data';
import { defaultColumnContactsDefs } from './share-contacts-table-data';

@Component({
  selector: 'app-share-details',
  templateUrl: './share-details.component.html',
  styleUrls: ['./share-details.component.scss'],
})
export class ShareDetailsComponent implements OnInit, OnDestroy {
  columnsCases: TableColumn[] = defaultColumnCasesDefs;
  columnsContacts: TableColumn[] = defaultColumnContactsDefs;
  cases: CaseDataDto[] = [];
  contacts: ContactDto[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public shareRequestService: ShareRequestService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.shareRequestService.getById(this.data?.shareRequest?.uuid).subscribe((result: any) => {
        this.cases = result.cases;
        this.contacts = result.contacts;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
