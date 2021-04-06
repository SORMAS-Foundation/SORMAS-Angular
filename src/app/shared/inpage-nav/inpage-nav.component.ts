import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inpage-nav',
  templateUrl: './inpage-nav.component.html',
  styleUrls: ['./inpage-nav.component.scss'],
})
export class InpageNavComponent implements OnInit {
  @Input() anchors: any[] = [];
  fragment = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      const element = document.getElementById(fragment);
      this.fragment = fragment;
      element?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
