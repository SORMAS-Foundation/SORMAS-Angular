import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FollowUpStatusComponent } from '../../../../cases/case_components/follow-up-status/follow-up-status.component';
import { NewEpidNumberComponent } from '../../../../cases/case_components/new-epid-number/new-epid-number.component';
import { SymptomsGroupSelectComponent } from '../../../../cases/case_components/symptoms-group-select/symptoms-group-select.component';
import { FormElementBase } from '../../types/form-element-base';

const COMPONENTS_MAP: any = {
  'app-follow-up-status': FollowUpStatusComponent,
  'app-new-epid-number': NewEpidNumberComponent,
  'app-symptoms-group-select': SymptomsGroupSelectComponent,
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
