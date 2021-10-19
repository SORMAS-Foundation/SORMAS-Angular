import { Component, OnInit } from '@angular/core';
import { FiltersFormComponent } from '../../../shared/filters/filters-form/filters-form.component';
import { EntryPointService } from '../../../_services/api/entry-point.service';
import { FilterService } from '../../../_services/filter.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-entry-points-filters',
  templateUrl: '../../../shared/filters/filters-form/filters-form.component.html',
})
export class EntryPointsFiltersComponent extends FiltersFormComponent implements OnInit {
  constructor(
    filterService: FilterService,
    formActionsService: FormActionsService,
    private formElementControlService: FormElementControlService,
    private entryPointService: EntryPointService,
    private notificationService: NotificationService
  ) {
    super(filterService, formActionsService);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.entryPointService.getAll().subscribe({
        next: (response: any) => {
          this.formData = this.formElementControlService.setOptionsToInput(
            response.elements,
            this.formData,
            'uuid',
            'defaultName'
          );
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }
}
