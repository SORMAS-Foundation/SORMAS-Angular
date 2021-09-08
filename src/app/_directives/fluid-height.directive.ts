import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appFluidHeight]',
})
export class FluidHeightDirective implements AfterViewInit {
  @Input() minHeight: number;
  @Input('appFluidHeight') topOffset: number | undefined;

  private domElement: HTMLElement;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement as HTMLElement;

    fromEvent(window, 'resize')
      .pipe(throttleTime(300), debounceTime(300))
      .subscribe(() => this.setHeight());
  }

  ngAfterViewInit(): void {
    this.setHeight();
  }

  private setHeight(): void {
    const windowHeight = window?.innerHeight;
    const topOffset = this.topOffset || this.calcTopOffset();
    const height = windowHeight - topOffset;

    this.renderer.setStyle(this.domElement, 'min-height', `${height}px`);
  }

  private calcTopOffset(): number {
    try {
      const rect = this.domElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return rect.top + scrollTop;
    } catch (e) {
      return 0;
    }
  }
}
