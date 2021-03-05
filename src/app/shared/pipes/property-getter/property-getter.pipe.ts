import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyGetter',
})
export class PropertyGetterPipe implements PipeTransform {
  transform(object: any, path: string): unknown {
    return path.split('.').reduce((o: any, p: any) => o && o[p], object);
  }
}
