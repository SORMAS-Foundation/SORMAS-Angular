import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  ADD_MODAL_MAX_WIDTH,
  CardAppearanceOptions,
  MODAL_LARGE_WIDTH,
} from '../../../app.constants';
import { AddEditBaseModalComponent } from '../add-edit-base-modal/add-edit-base-modal.component';
import { ExportConfigurationComponent } from '../export-configuration/export-configuration.component';

@Component({
  selector: 'app-custom-export',
  templateUrl: './custom-export.component.html',
  styleUrls: ['./custom-export.component.scss'],
})
export class CustomExportComponent implements OnDestroy {
  appearance = CardAppearanceOptions;
  dataMyExports = [
    {
      title: 'Surveillance officer export for case data',
      link: '/soefcd.pdf',
    },
    {
      title: 'Anselm Adam export for person data',
      link: '/aaefpd.pdf',
    },
    {
      title: 'Export for general person',
      link: '/efgp.pdf',
    },
    {
      title: 'Export for general purpose',
      link: '/efgp.pdf',
    },
    {
      title: 'New export name',
      link: '/nen.pdf',
    },
  ];

  dataSharedExports = [
    {
      title: 'Surveillance officer export for case data',
      link: '/soefcd.pdf',
    },
    {
      title: 'Anselm Adam export for person data',
      link: '/aaefpd.pdf',
    },
    {
      title: 'Export for general person',
      link: '/efgp.pdf',
    },
    {
      title: 'Export for general purpose',
      link: '/efgp.pdf',
    },
    {
      title: 'New export name',
      link: '/nen.pdf',
    },
    {
      title: 'Shared export case management',
      link: '/secm.pdf',
    },
  ];

  subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  addEditExportConfiguration(resource?: any): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      width: MODAL_LARGE_WIDTH,
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant(
          resource
            ? 'captions.exportEditExportConfiguration'
            : 'captions.exportNewExportConfiguration'
        ),
        exportType: this.data.exportType,
        exportFormData: this.data.exportFormData,
        resource,
        component: ExportConfigurationComponent,
      },
    });
    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
