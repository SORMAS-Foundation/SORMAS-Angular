import { Component, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn, TableDataFormatOptions } from '../../../_models/common';
import * as icons from '../../../_constants/icons';
import * as enums from '../../../_constants/enums';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnChanges {
  @Input() config: TableColumn;
  @Input() data: any;

  dataType: string | undefined;
  dataLink: string | undefined;
  dataDisplay: string | undefined;
  dataClass = '';
  formats = TableDataFormatOptions;

  iconName: string;
  iconClass: string;

  constructor(private translateService: TranslateService) {}

  ngOnChanges(): void {
    this.formatData();
    this.setIcon();
  }

  setIcon(): void {
    const { dataKey, iconify } = this.config;
    if (iconify) {
      const key = this.getData(dataKey);
      const iconsSet: any = icons[iconify as keyof typeof icons];
      this.iconName = iconsSet[key];
      this.iconClass = `icon-${dataKey.split('.').pop()}-${this.getRawData(dataKey)}`;
    }
  }

  getType(): string | undefined {
    if (this.data?.index) {
      return this.formats.LOADING;
    }
    return this.config.format?.type;
  }

  translateData(rawData: string): string {
    if (rawData === undefined || rawData === null) {
      return rawData;
    }
    let translatedData: string = String(rawData);
    if (this.config.translationName) {
      // @ts-ignore
      translatedData = enums[this.config.translationName][rawData];
      translatedData = this.translateService.instant(translatedData);
    }
    return translatedData;
  }

  formatData(): void {
    this.dataType = this.getType();
    switch (this.config.format?.type) {
      case this.formats.LINK:
        this.formatLink();
        break;
      case this.formats.DATE:
        this.formatDate();
        break;
      case this.formats.NUMBER:
        this.formatNumber();
        break;
      case this.formats.DISPLAY:
        this.formatDisplay();
        break;
      default: {
        const data = this.getData(this.config.dataKey);
        this.dataDisplay = this.config.translationName ? this.translateData(data) : data;
      }
    }
  }

  formatLink(): void {
    this.dataLink = this.interpolate();
    this.dataDisplay = this.getData(this.config.dataKey);
  }

  formatDate(): void {
    this.dataDisplay = this.getData(this.config.dataKey);
  }

  formatNumber(): void {
    const match = this.config.format?.match;
    const value = this.getData(this.config.dataKey);
    const raw = parseFloat(value);

    if (match && !Number.isNaN(raw)) {
      Object.entries(match).find(([key, range]) => {
        const check = range[0] === range[1] ? raw === range[0] : raw > range[0] && raw < range[1];
        if (check) {
          this.dataClass = key;
        }
        return check;
      });
    }

    this.dataDisplay = this.interpolate();
  }

  formatDisplay(): void {
    this.dataDisplay = this.interpolate();
  }

  getRawData(key: string): any {
    return key.split('.').reduce((o, i) => {
      if (!o) {
        return o;
      }
      const [partialKey, partialIndex] = i.split(/[[\]]/).filter(Boolean);
      return partialIndex ? o[partialKey][partialIndex] : o[partialKey];
    }, this.data);
  }

  getData(key: string): any {
    let result = this.getRawData(key);
    if (this.config.format?.truncate) {
      result = result?.slice(0, this.config.format.truncate);
    }
    return result;
  }

  interpolate(): string | undefined {
    const pattern = this.config.format?.pattern;
    const params = this.config.format?.params;

    if (!pattern || !params) {
      return this.getData(this.config.dataKey);
    }

    let result: any = pattern;
    let paramHasValue = false;

    this.config.format?.params?.forEach((key: any, index: number) => {
      let param = this.getRawData(key);
      const unTranslatedParam = param;
      if (param !== undefined && param !== null) {
        paramHasValue = true;
        if (this.config.translationName) {
          param = this.translateData(param);
        }
      }
      result = result.replaceAll(`>$param${index + 1}<`, `>${param}<` ?? '');
      result = result.replaceAll(`$param${index + 1}`, unTranslatedParam);
    });
    return paramHasValue ? result : '';
  }
}
