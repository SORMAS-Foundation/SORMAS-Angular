import { Component } from '@angular/core';
import { CONFIGURATION_COMMUNITY_FILTERS_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_COMMUNITY_FILTERS } from './community-filters/community-filters-form-data';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss'],
})
export class CommunitiesComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_COMMUNITY_FILTERS));
  formId = CONFIGURATION_COMMUNITY_FILTERS_FORM_ID;
}
