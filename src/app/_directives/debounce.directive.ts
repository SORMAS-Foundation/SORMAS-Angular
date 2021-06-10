import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Directive({
  selector: '[appDebounce]',
})
export class DebounceDirective implements OnInit, OnDestroy {
  time = 500;
  @Input() set appDebounce(val: any) {
    this.time = +val || 500;
  }
  get appDebounce(): any {
    return this.time;
  }

  @Output() debounce = new EventEmitter<any>();

  private subscription: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    this.subscription = fromEvent(element, 'input')
      .pipe(
        debounceTime(this.time),
        distinctUntilChanged(),
        map((event: any) => {
          return event.target.value;
        }),
        filter((value) => !value || value.length > 2)
      )
      .subscribe(() => this.debounce.emit());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
