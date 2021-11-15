import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivitiesListComponent } from '../../../widgets/activities-list/activities-list.component';
// tslint:disable-next-line:max-line-length
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
import { LocationDropdownsComponent } from '../../../widgets/location-dropdowns/location-dropdowns.component';

const COMPONENTS_MAP: any = {
  'app-follow-up-status': FollowUpStatusComponent,
  'app-new-epid-number': NewEpidNumberComponent,
  'app-symptoms-group-select': SymptomsGroupSelectComponent,
  'app-exposures-list': ExposuresListComponent,
  'app-activities-list': ActivitiesListComponent,
  'app-addresses-list': AddressesListComponent,
  'app-person-contacts-list': PersonContactsListComponent,
  'app-gps-coords': GpsCoordsComponent,
  'app-address-button': AddressButtonComponent,
  'app-last-update': LastUpdateComponent,
  'app-superordinate-event': SuperordinateEventComponent,
  'app-contact-case-details': ContactCaseDetailsComponent,
  'app-contact-follow-up': ContactFollowUpComponent,
  'app-exports-group-select': ExportsGroupSelectComponent,
  'app-location-dropdowns': LocationDropdownsComponent,
};

@Component({
  selector: 'app-form-widget',
  templateUrl: './form-widget.component.html',
  styleUrls: ['./form-widget.component.scss'],
})
export class FormWidgetComponent implements AfterViewInit {
  config: FormElementBase<string>;
  group: FormGroup;
  formId: string;
  components = COMPONENTS_MAP;

  @ViewChild('dynamic', { read: ViewContainerRef }) dynamic: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.components[this.config?.widget]
    );
    this.dynamic.clear();
    const componentRef = this.dynamic.createComponent<any>(componentFactory);
    componentRef.instance.group = this.group;
    componentRef.instance.config = this.config;
    componentRef.instance.formId = this.formId;
    this.changeDetectorRef.detectChanges();
  }
}
