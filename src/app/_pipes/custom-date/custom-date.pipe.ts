import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!(value instanceof Date)) {
      return value;
    }

    if (!args) {
      return super.transform(value);
    }

    const result: any[] = [];
    args.split(' ').forEach((format: string, index: number) => {
      result.push(
        `<span class="custom-date-item-${index + 1}">${super.transform(value, format)}</span>`
      );
    });

    return `<span class="custom-date">${result.join(' ')}</span>`;
  }
}
