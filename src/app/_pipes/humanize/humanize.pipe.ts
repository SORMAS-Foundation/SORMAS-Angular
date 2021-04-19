import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize',
})
export class HumanizePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }
    return value.toLocaleLowerCase().replace('_', ' ');
  }
}
