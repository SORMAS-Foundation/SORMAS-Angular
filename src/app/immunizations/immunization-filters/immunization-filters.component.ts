import { Component, OnInit } from '@angular/core';
import { FiltersFormComponent } from '../../shared/filters/filters-form/filters-form.component';
import { FilterService } from '../../_services/filter.service';
import { FormActionsService } from '../../_services/form-actions.service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'app-immunization-filters',
  templateUrl: '../../shared/filters/filters-form/filters-form.component.html',
})
export class ImmunizationFiltersComponent extends FiltersFormComponent implements OnInit {
  constructor(
    filterService: FilterService,
    formActionsService: FormActionsService,
    private formElementControlService: FormElementControlService,
    private helperService: HelperService
  ) {
    super(filterService, formActionsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formData = this.formElementControlService.setOptionsToInput(
      this.helperService.generateWeekOptions(),
      this.formData,
      'newImmunizationEpidFrom',
      'value'
    );

    this.formData = this.formElementControlService.setOptionsToInput(
      this.helperService.generateWeekOptions(),
      this.formData,
      'newImmunizationEpidTo',
      'value'
    );
  }
}
