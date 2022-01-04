import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offset } from '../../_models/common';

@Component({
  selector: 'app-inpage-nav',
  templateUrl: './inpage-nav.component.html',
  styleUrls: ['./inpage-nav.component.scss'],
})
export class InpageNavComponent implements OnInit {
  @Input() anchors: any[] = [];
  @Input() pageOffset: number;
  fragment = '';

  constructor(private route: ActivatedRoute) {}

  getScrollingOffset(el: HTMLElement | null): Offset {
    const rect: DOMRect | undefined = el?.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect?.top || 0 + scrollTop, left: 0 };
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) {
        return;
      }
      const element = document.getElementById(fragment);
      const currentPosition = this.getScrollingOffset(element);
      this.fragment = fragment;
      window.scrollTo({
        left: 0,
        top: (window.top?.scrollY || 0) + currentPosition.top - this.pageOffset,
        behavior: 'smooth',
      });
    });
  }
}
