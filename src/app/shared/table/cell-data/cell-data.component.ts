import { Component, Input, OnChanges } from '@angular/core';
import { TableColumn } from '../../../_models/common';
import { IconsMap } from '../../../app.constants';

@Component({
  selector: 'app-cell-data',
  templateUrl: './cell-data.component.html',
  styleUrls: ['./cell-data.component.scss'],
})
export class CellDataComponent implements OnChanges {
  @Input() config: TableColumn;
  @Input() data: any;

  dataType: string | undefined;
  dataLink: string | undefined;
  dataDisplay: string | undefined;
  icons = IconsMap;

  ngOnChanges(): void {
    this.formatData();
  }

  getIcon(): string {
    const key = this.getData(this.config.dataKey);
    return this.icons[key as keyof typeof IconsMap];
  }

  getClass(key: string, value: string): string {
    return `${key.toLocaleLowerCase()}-${value.toLocaleLowerCase()}`;
  }

  getType(): string | undefined {
    if (this.data.index) {
      return 'LOADING';
    }
    return this.config.format?.type;
  }

  formatData(): void {
    this.dataType = this.getType();
    switch (this.config.format?.type) {
      case 'LINK':
        this.formatLink();
        break;
      case 'DATE':
        this.formatDate();
        break;
      case 'NUMBER':
        this.formatNumber();
        break;
      case 'DISPLAY':
        this.formatDisplay();
        break;
      default:
        this.dataDisplay = this.getData(this.config.dataKey);
    }
  }

  formatLink(): void {
    this.dataLink = this.interpolate();
    let result = this.getData(this.config.dataKey);
    if (this.config.format?.truncate) {
      result = result?.slice(0, this.config.format.truncate);
    }
    this.dataDisplay = result;
  }

  formatDate(): void {
    this.dataDisplay = this.getData(this.config.dataKey);
  }

  formatNumber(): void {
    const match = this.config.format?.match;
    const value = this.getData(this.config.dataKey);
    const temp = this.interpolate() || value;
    let result = '';

    if (match) {
      Object.entries(match).find(([key, range]) => {
        const check = value > range[0] && value < range[1];
        if (check) {
          result = key;
        }
        return check;
      });
    }

    this.dataDisplay = temp.replace('$match', result);
  }

  formatDisplay(): void {
    this.dataDisplay = this.interpolate();
  }

  getData(key: string): any {
    return key.split('.').reduce((o, i) => o && o[i], this.data);
  }

  interpolate(): string | undefined {
    let result = this.config.format?.pattern;
    this.config.format?.params?.forEach((key: any, index: number) => {
      const param = this.getData(key);
      result = result?.replaceAll(`$param${index + 1}`, param ?? '');
    });
    return result;
  }
}
