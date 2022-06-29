import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivitiesListComponent } from '../../../widgets/activities-list/activities-list.component';
// eslint-disable-next-line max-len
import { ExposuresListComponent } from '../../../widgets/exposures-list/exposures-list.component';
import { AddressesListComponent } from '../../../widgets/addresses-list/addresses-list.component';
import { FollowUpStatusComponent } from '../../../widgets/follow-up-status/follow-up-status.component';
import { NewEpidNumberComponent } from '../../../widgets/new-epid-number/new-epid-number.component';
import { SymptomsGroupSelectComponent } from '../../../widgets/symptoms-group-select/symptoms-group-select.component';
import { FormElementBase } from '../../types/form-element-base';
import { PersonContactsListComponent } from '../../../widgets/person-contacts-list/person-contacts-list.component';
import { GpsCoordsComponent } from '../../../widgets/gps-coords/gps-coords.component';
import { AddressButtonComponent } from '../../../widgets/address-button/address-button.component';
import { LastUpdateComponent } from '../../../widgets/last-update/last-update.component';
import { SuperordinateEventComponent } from '../../../widgets/superordinate-event/superordinate-event.component';
import { ContactCaseDetailsComponent } from '../../../widgets/contact-case-details/contact-case-details.component';
import { ContactFollowUpComponent } from '../../../widgets/contact-follow-up/contact-follow-up.component';
import { ExportsGroupSelectComponent } from '../../../widgets/exports-group-select/exports-group-select.component';
import { MsersDiseasesComponent } from '../../../widgets/msers-diseases/msers-diseases.component';
import { ImmunizationRecoveryComponent } from '../../../widgets/immunization-recovery/immunization-recovery.component';
import { AddCaseLabelComponent } from '../../../widgets/add-case-label/add-case-label.component';
import { CasePersonContactsListComponent } from '../../../widgets/case-person-contacts-list/case-person-contacts-list.component';
import { LineListingNewCasesComponent } from '../../../widgets/line-listing-new-cases/line-listing-new-cases.component';
import { LineListingNewContactsComponent } from '../../../widgets/line-listing-new-contacts/line-listing-new-contacts.component';
import { GroupSelectComponent } from '../../../widgets/group-select/group-select.component';
import { AddVisitsGroupSelectComponent } from '../../../widgets/add-visits-group-select/add-visits-group-select.component';
import { InfoModalComponent } from '../../../widgets/info-modal/info-modal.component';
import { CalculateCaseClassificationComponent } from '../../../widgets/calculate-case-classification/calculate-case-classification.component';
import { ClinicalCourseGroupSelectComponent } from '../../../widgets/clinical-course-group-select/clinical-course-group-select.component';

const COMPONENTS_MAP: any = {
  'app-follow-up-status': FollowUpStatusComponent,
  'app-new-epid-number': NewEpidNumberComponent,
  'app-symptoms-group-select': SymptomsGroupSelectComponent,
  'app-add-visits-group-select': AddVisitsGroupSelectComponent,
  'app-exposures-list': ExposuresListComponent,
  'app-activities-list': ActivitiesListComponent,
  'app-addresses-list': AddressesListComponent,
  'app-case-person-contacts-list': CasePersonContactsListComponent,
  'app-person-contacts-list': PersonContactsListComponent,
  'app-gps-coords': GpsCoordsComponent,
  'app-address-button': AddressButtonComponent,
  'app-last-update': LastUpdateComponent,
  'app-superordinate-event': SuperordinateEventComponent,
  'app-contact-case-details': ContactCaseDetailsComponent,
  'app-contact-follow-up': ContactFollowUpComponent,
  'app-exports-group-select': ExportsGroupSelectComponent,
  'app-msers-diseases': MsersDiseasesComponent,
  'app-immunization-recovery': ImmunizationRecoveryComponent,
  'app-add-case-label': AddCaseLabelComponent,
  'app-line-listing-new-cases': LineListingNewCasesComponent,
  'app-line-listing-new-contacts': LineListingNewContactsComponent,
  'app-group-select': GroupSelectComponent,
  'app-info-modal': InfoModalComponent,
  'app-calculate-case-classification': CalculateCaseClassificationComponent,
  'app-clinical-course-group-select': ClinicalCourseGroupSelectComponent,
};

@Component({
  selector: 'app-form-widget',
  templateUrl: './form-widget.component.html',
  styleUrls: ['./form-widget.component.scss'],
})
export class FormWidgetComponent implements AfterViewInit {
  config: FormElementBase<string>;
  group: UntypedFormGroup;
  formId: string;
  components = COMPONENTS_MAP;

  @ViewChild('dynamic', { read: ViewContainerRef }) dynamic: ViewContainerRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.dynamic.clear();
    const componentRef: any = this.dynamic.createComponent(this.components[this.config?.widget]);
    componentRef.instance.group = this.group;
    componentRef.instance.config = this.config;
    componentRef.instance.formId = this.formId;
    this.changeDetectorRef.detectChanges();
  }
}
