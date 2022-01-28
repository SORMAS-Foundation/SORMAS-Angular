import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MODAL_MEDIUM_WIDTH } from '../../../_constants/common';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';
import { SearchCaseModalComponent } from '../../modals/search-case-modal/search-case-modal.component';

@Component({
  selector: 'app-immunization-recovery',
  templateUrl: './immunization-recovery.component.html',
  styleUrls: ['./immunization-recovery.component.scss'],
})
export class ImmunizationRecoveryComponent implements OnDestroy {
  private subscription: Subscription[] = [];
  config: FormElementBase<any>;
  group: FormGroup;

  constructor(private dialog: MatDialog, public translateService: TranslateService) {}

  openSearchCaseModal(): void {
    const data = {
      selectedUuid: null,
    };
    if (this.config.value) {
      data.selectedUuid = this.config.value;
    }
    const dialogRef = this.dialog.open(SearchCaseModalComponent, {
      width: MODAL_MEDIUM_WIDTH,
      data,
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.config.value = {
            uuid: result.selectedCase.uuid,
          };
          this.group.patchValue({ caze: this.config.value });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
