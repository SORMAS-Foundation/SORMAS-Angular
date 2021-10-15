import { Component, OnInit } from '@angular/core';
import { FiltersFormComponent } from '../../../shared/filters/filters-form/filters-form.component';
import { FilterService } from '../../../_services/filter.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { NotificationService } from '../../../_services/notification.service';
import { SubcontinentService } from '../../../_services/api/subcontinent.service';

@Component({
  selector: 'app-subcontinent-filters',
  templateUrl: '../../../shared/filters/filters-form/filters-form.component.html',
})
export class SubcontinentFiltersComponent extends FiltersFormComponent implements OnInit {
  constructor(
    filterService: FilterService,
    formActionsService: FormActionsService,
    private formElementControlService: FormElementControlService,
    private countryService: SubcontinentService,
    private notificationService: NotificationService
  ) {
    super(filterService, formActionsService);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.countryService.getAll().subscribe({
        next: (response: any) => {
          this.formData = this.formElementControlService.setOptionsToInput(
            response.elements,
            this.formData,
            'subcontinent.uuid',
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
