import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Filter } from '../_models/common';
import { EntityLink } from '../_constants/common';
import {FormBase} from '../shared/dynamic-form/types/form-element-base';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private apiUrl: string;

  setApiUrl(apiUrl: string): void {
    this.apiUrl = apiUrl;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getRange(start: number, end: number, step = 1): number[] {
    const output = [];
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  }

  getYears(start = 1900, end?: number): any[] {
    const years = this.getRange(start, end ?? new Date().getFullYear());
    return years.map((x) => ({ key: x, value: x }));
  }

  getMonths(language = 'en'): any[] {
    const months = this.getRange(0, 11);
    return months.map((x) => ({
      key: x,
      value: new Intl.DateTimeFormat(language, { month: 'long' }).format(new Date().setMonth(x)),
    }));
  }

  getDaysForMonth(month?: number, year?: number): any[] {
    const maxDays = new Date(
      year ?? new Date().getFullYear(),
      (month ?? new Date().getMonth()) + 1,
      0
    ).getDate();
    const days = this.getRange(1, maxDays);
    return days.map((x) => ({ key: x, value: x }));
  }

  setQueryParamsInFilters(routeParams: Params): Filter[] {
    const filters: Filter[] = [];
    Object.keys(routeParams).forEach((el) => {
      filters.push({ field: el, value: { uuid: routeParams[el] } });
    });
    return filters;
  }

  getCurrentSubpage(url: string, links: any): EntityLink {
    const parts = url.split('/');
    let currentLink: EntityLink = {} as EntityLink;
    links(parts[3] || '').forEach((el: any) => {
      if (url === el.link) {
        currentLink = el;
      }
    });
    return {
      title: currentLink?.title || '',
      showFormActions: currentLink?.showFormActions || false,
      link: currentLink?.link || '',
    };
  }

  setOptionsToInput(options: any[], type: string, formElements: FormBase<any>[]): FormBase<any>[] {
    const newOptions = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < options.length; i += 1) {
      switch (type) {
        case 'country':
          newOptions.push({
            key: options[i].uuid,
            value: options[i].defaultName,
          });
          break;
        default:
          break;
      }
    }

    switch (type) {
      case 'country':
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < formElements.length; i += 1) {
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          formElements[i].fields.find((elem) => elem.key === 'country').options = newOptions;
        }
        break;
      default:
        break;
    }
    return formElements;
  }
}
