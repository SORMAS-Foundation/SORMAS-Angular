import { Pipe, PipeTransform } from '@angular/core';
import { UUID_KEY } from '../../app.constants';

@Pipe({
  name: 'toShortId',
})
export class ToShortIdPipe implements PipeTransform {
  transform(value: string | undefined, dataKey: string): string {
    if (!value) {
      return '';
    }
    if (dataKey === UUID_KEY) {
      return value.substring(0, 6);
    }
    return value;
  }
}
