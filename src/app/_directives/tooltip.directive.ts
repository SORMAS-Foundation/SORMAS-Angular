import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { TooltipComponent } from '../shared/tooltip/tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input('appTooltip') content: string | TemplateRef<any>;

  private overlayRef: OverlayRef;
  private tooltipRef: ComponentRef<TooltipComponent>;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetX: 0,
          offsetY: 0,
        },
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show(): void {
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.tooltipRef = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
      if (typeof this.content === 'string') {
        this.tooltipRef.instance.text = this.content;
      }
      if (this.content instanceof TemplateRef) {
        this.tooltipRef.instance.contentTemplate = this.content;
      }
      setTimeout(() => {
        this.tooltipRef.instance.visible = true;
      }, 0);
    }
  }

  @HostListener('mouseleave')
  hide(): void {
    this.tooltipRef.instance.visible = false;
    setTimeout(() => {
      this.closeTooltip();
    }, 300);
  }

  ngOnDestroy(): void {
    this.closeTooltip();
  }

  private closeTooltip(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
