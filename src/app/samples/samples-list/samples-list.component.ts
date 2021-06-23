import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AddBaseModalComponent } from '../../shared/modals/add-base-modal/add-base-modal.component';
import { ADD_MODAL_MAX_WIDTH } from '../../app.constants';
import { TableColumn } from '../../_models/common';
import { CONFIG_SAMPLES } from '../../_constants/storage';
import { SampleDto } from '../../_models/sampleDto';
import { SampleService } from '../../_services/api/sample.service';
import { defaultColumnDefs } from './samples-list-table-data';
import { SampleAddComponent } from '../sample-add/sample-add.component';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.scss'],
})
export class SamplesListComponent implements OnInit {
  samples: SampleDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_SAMPLES;

  private subscription: Subscription[] = [];

  constructor(
    public sampleService: SampleService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddSampleModal(): void {
    const dialogRef = this.dialog.open(AddBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('Sample.addNewSample'),
        component: SampleAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }
}
