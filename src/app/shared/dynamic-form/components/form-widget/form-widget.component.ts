import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivitiesListComponent } from '../../../../cases/case_components/case-epidemiological-data/activities-list/activities-list.component';
// tslint:disable-next-line:max-line-length
import { ExposuresListComponent } from '../../../../cases/case_components/case-epidemiological-data/exposures-list/exposures-list.component';
import { AddressesListComponent } from '../../../../cases/case_components/case-person/addresses-list/addresses-list.component';
import { NewAddressComponent } from '../../../../cases/case_components/case-person/new-address/new-address.component';
import { FollowUpStatusComponent } from '../../../../cases/case_components/follow-up-status/follow-up-status.component';
import { NewEpidNumberComponent } from '../../../../cases/case_components/new-epid-number/new-epid-number.component';
import { SymptomsGroupSelectComponent } from '../../../../cases/case_components/symptoms-group-select/symptoms-group-select.component';
import { FormElementBase } from '../../types/form-element-base';

const COMPONENTS_MAP: any = {
  'app-follow-up-status': FollowUpStatusComponent,
  'app-new-epid-number': NewEpidNumberComponent,
  'app-symptoms-group-select': SymptomsGroupSelectComponent,
  'app-exposures-list': ExposuresListComponent,
  'app-activities-list': ActivitiesListComponent,
  'app-addresses-list': AddressesListComponent,
  'app-new-address': NewAddressComponent,
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
