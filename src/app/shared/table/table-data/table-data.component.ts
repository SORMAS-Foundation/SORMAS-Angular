import { Component, Input, OnChanges } from '@angular/core';
import { TableColumn } from '../../../_models/common';
import { IconsMap } from '../../../app.constants';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnChanges {
  @Input() data: any;
  @Input() config: TableColumn;

  icons = IconsMap;

  ngOnChanges(): void {
    this.formatData();
  }

  formatData(): void {
    if (this.data === 'loading') {
      return;
    }

    if (this.config.numberFormat) {
      const classes = Object.entries(this.config.numberFormat)
        .reduce((result: string[], [name, match]) => {
          if (this.data >= match[0] && this.data < match[1]) {
            result.push(name);
          }
          return result;
        }, [])
        .join(' ');
      if (classes) {
        this.data = `<span class="${classes}">${this.data}</span>`;
      }
    }

    if (this.config.interpolate) {
      this.data = this.config.interpolate.replace('{value}', this.data);
    }
  }

  getIcon(key: string): string {
    return this.icons[key as keyof typeof IconsMap];
  }

  getClass(key: string, value: string): string {
    return `${key.toLocaleLowerCase()}-${value.toLocaleLowerCase()}`;
  }
}
