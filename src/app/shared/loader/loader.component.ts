import { Component, Input, OnInit } from '@angular/core';
import { READY_AFTER } from '../../_constants/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() show: boolean;
  ready = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.ready = true;
    }, READY_AFTER);
  }
}
