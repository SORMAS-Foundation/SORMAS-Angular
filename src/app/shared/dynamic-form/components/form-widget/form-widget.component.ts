import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../types/form-element-base';

@Component({
  selector: 'app-form-widget',
  templateUrl: './form-widget.component.html',
  styleUrls: ['./form-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWidgetComponent implements AfterViewInit {
  config: FormElementBase<string>;
  group: FormGroup;

  @ViewChild('dynamic', { read: ViewContainerRef }) dynamic: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.config?.widget
    );
    this.dynamic.clear();
    const componentRef = this.dynamic.createComponent<any>(componentFactory);
    componentRef.instance.group = this.group;
    componentRef.instance.config = this.config;
    this.changeDetectorRef.detectChanges();
  }
}
