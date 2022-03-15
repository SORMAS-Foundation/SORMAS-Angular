import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import {
  addDays,
  addYears,
  endOfISOWeek,
  format,
  getWeek,
  getYear,
  startOfISOWeek,
} from 'date-fns';
import { of } from 'rxjs';
import { Filter } from '../_models/common';
import {
  BRIEF_DATE_FORMAT,
  EntityLink,
  FacilityCategoryGroups,
  FacilityCategory,
  FacilityType,
} from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private apiUrl: string;
  private domainSubfolder: string;

  setApiUrl(apiUrl: string): void {
    this.apiUrl = apiUrl;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  setDomainFolder(domainFolder: string): void {
    this.domainSubfolder = domainFolder;
  }

  getImagePath(imageName: string): string {
    if (this.domainSubfolder) {
      return `${this.domainSubfolder}assets/img/${imageName}`;
    }
    return `/assets/img/${imageName}`;
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

  getTimeOptions(startHour = 0, endHour = 23, minutesStep = 15): any[] {
    const result = [];
    for (let i = startHour; i <= endHour; i += 1) {
      for (let j = 0; j < 60; j += minutesStep) {
        const hour = `0${i}`.slice(-2);
        const minute = `0${j}`.slice(-2);
        const timeOption = `${hour}:${minute}`;
        result.push({
          key: timeOption,
          value: timeOption,
        });
      }
    }
    return result;
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

  generateWeekForDate(date = new Date()): any {
    const weekNumber = getWeek(date, {
      weekStartsOn: 1,
    });
    const start = startOfISOWeek(date);
    const end = endOfISOWeek(date);
    const year = getYear(end);
    return {
      key: `${weekNumber}-${year}`,
      value: `Wk ${weekNumber}-${year} (${format(start, BRIEF_DATE_FORMAT)}-${format(
        end,
        BRIEF_DATE_FORMAT
      )})`,
      start,
      end,
    };
  }

  generateWeekOptions(date = new Date()): any[] {
    const weekOptions: any[] = [];
    let startDate = date;
    const endDate = addYears(startDate, -1);
    while (startDate > endDate) {
      weekOptions.push(this.generateWeekForDate(startDate));
      startDate = addDays(startDate, -7);
    }
    return weekOptions;
  }

  getEpiWeeksForYear(filters: any) {
    const year = filters[0].value;
    const options = this.generateWeekOptions(new Date(year, 11, 31));
    return of(options.filter((item) => item.key.includes(year)).reverse());
  }

  getFacilityCategories() {
    return of(Object.entries(FacilityCategory).map(([key, value]) => ({ key, value })));
  }

  getFacilityTypes(filters: any) {
    const type = filters[0].value;
    const typesMap: any = FacilityCategoryGroups;
    return of(
      Object.entries(FacilityType)
        .map(([key, value]) => ({ key, value }))
        .filter((item) => typesMap[type].includes(item.key))
    );
  }
}
