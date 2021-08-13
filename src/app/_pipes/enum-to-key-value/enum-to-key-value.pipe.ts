import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToKeyValue',
})
export class EnumToKeyValuePipe implements PipeTransform {
  transform(definition: any): Array<any> {
    return Object.keys(definition).map((def) => ({ key: def, value: definition[def] }));
  }
}
