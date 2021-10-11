import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SPINNER_DELAY } from '../../_constants/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnChanges {
  @Input() show: boolean;
  ready = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.show.currentValue) {
      setTimeout(() => {
        this.ready = true;
      }, SPINNER_DELAY);
    }
  }
}
