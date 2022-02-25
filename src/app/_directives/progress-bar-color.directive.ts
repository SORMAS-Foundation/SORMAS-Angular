import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgressBarColor]',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class ProgressBarColor implements OnChanges {
  static counter = 0;

  @Input() appProgressBarColor: any;
  styleEl: HTMLStyleElement = document.createElement('style');

  // eslint-disable-next-line no-plusplus
  uniqueAttr = `app-progress-bar-color-${ProgressBarColor.counter++}`;

  constructor(private el: ElementRef) {
    const nativeEl: HTMLElement = this.el.nativeElement;
    nativeEl.setAttribute(this.uniqueAttr, '');
    nativeEl.appendChild(this.styleEl);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.updateColor();
  }

  updateColor(): void {
    // update dynamic style with the uniqueAttr
    this.styleEl.innerText = `
      [${this.uniqueAttr}] .mat-progress-bar-fill::after {
        background-color: ${this.appProgressBarColor};
      }
    `;
  }
}
