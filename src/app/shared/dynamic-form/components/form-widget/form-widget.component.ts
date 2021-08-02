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
import { NewAddressComponent } from '../../../widgets/new-address/new-address.component';
import { FollowUpStatusComponent } from '../../../widgets/follow-up-status/follow-up-status.component';
import { NewEpidNumberComponent } from '../../../widgets/new-epid-number/new-epid-number.component';
import { SymptomsGroupSelectComponent } from '../../../widgets/symptoms-group-select/symptoms-group-select.component';
import { FormElementBase } from '../../types/form-element-base';
import { PersonContactsListComponent } from '../../../widgets/person-contacts-list/person-contacts-list.component';
import { NewPersonContactComponent } from '../../../widgets/new-person-contact/new-person-contact.component';
import { GpsCoordsComponent } from '../../../widgets/gps-coords/gps-coords.component';
import { AddressButtonComponent } from '../../../widgets/address-button/address-button.component';

const COMPONENTS_MAP: any = {
  'app-follow-up-status': FollowUpStatusComponent,
  'app-new-epid-number': NewEpidNumberComponent,
  'app-symptoms-group-select': SymptomsGroupSelectComponent,
  'app-exposures-list': ExposuresListComponent,
  'app-activities-list': ActivitiesListComponent,
  'app-addresses-list': AddressesListComponent,
  'app-new-address': NewAddressComponent,
  'app-person-contacts-list': PersonContactsListComponent,
  'app-new-person-contact': NewPersonContactComponent,
  'app-gps-coords': GpsCoordsComponent,
  'app-address-button': AddressButtonComponent,
};

@Component({
  selector: 'app-form-widget',
  templateUrl: './form-widget.component.html',
  styleUrls: ['./form-widget.component.scss'],
})
export class FormWidgetComponent implements AfterViewInit {
  config: FormElementBase<string>;
  group: FormGroup;
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
    this.changeDetectorRef.detectChanges();
  }
}
