import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ADD_MODAL_MAX_WIDTH, MODAL_LARGE_WIDTH } from '../../app.constants';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { CardAppearanceOptions } from '../../_constants/enums';
import { ExportConfigurationComponent } from '../export-configuration/export-configuration.component';

@Component({
  selector: 'app-custom-case-export',
  templateUrl: './custom-case-export.component.html',
  styleUrls: ['./custom-case-export.component.scss'],
})
export class CustomCaseExportComponent implements OnDestroy {
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

  constructor(private dialog: MatDialog, private translateService: TranslateService) {}

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
