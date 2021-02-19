import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from '@angular/core';
import { throttle as _throttle } from 'lodash-es';

enum ScrollDirection {
  UP = 'up',
  DOWN = 'down',
}

enum ScrollListener {
  HOST = 'scroll',
  WINDOW = 'window:scroll',
}

@Component({
  selector: 'app-scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss'],
})
export class ScrollContainerComponent implements OnInit, OnChanges {
  private _element: Element;
  private _window: Element;
  public scrollTop = 0;
  @Input() more = true;
  @Input() scrollDelay = 500;
  @Input() scrollOffset = 1000;
  @Output() scrolled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @HostListener('scroll') _scroll: any;
  @HostListener('window:scroll') _windowScroll: any;

  constructor(private elRef: ElementRef) {
    this._element = this.elRef.nativeElement;
    this._window = document.documentElement as Element;
  }

  ngOnInit(): void {
    this.setThrottle();
  }

  ngOnChanges(changes: any): void {
    if (changes.scrollDelay) {
      this.setThrottle();
    }
  }

  setThrottle(): void {
    // eslint-disable-next-line no-multi-assign
    this._scroll = this._windowScroll = _throttle(this.handleScroll, this.scrollDelay);
  }

  getListener = () => {
    const scrollHost =
      this.elRef.nativeElement.clientHeight === this.elRef.nativeElement.scrollHeight
        ? ScrollListener.WINDOW
        : ScrollListener.HOST;

    console.log(scrollHost);

    return scrollHost;
  };

  roundTo = (from: number, to: number = this.scrollOffset) => Math.floor(from / to) * to;
  getScrollDirection = (st: number) =>
    this.scrollTop <= st ? ScrollDirection.DOWN : ScrollDirection.UP;

  canScroll(e: Element): boolean {
    const scrolled =
      this.more &&
      this.getScrollDirection(e.scrollTop) === ScrollDirection.DOWN &&
      this.roundTo(e.clientHeight) === this.roundTo(e.scrollHeight - e.scrollTop);
    this.scrollTop = e.scrollTop;
    return scrolled;
  }

  handleScroll = () =>
    this.getListener() === ScrollListener.HOST
      ? this.scrolled.emit(this.canScroll(this._element))
      : this.scrolled.emit(this.canScroll(this._window));
}
