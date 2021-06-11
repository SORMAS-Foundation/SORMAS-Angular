import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum-to-key-value',
})
export class EnumToKeyValuePipe implements PipeTransform {
  transform(definition: any): Array<any> {
    return Object.keys(definition).map((def) => ({ key: def, value: definition[def] }));
  }
}
