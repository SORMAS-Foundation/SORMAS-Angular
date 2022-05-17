import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  transform(
    value: string,
    strToReplace: string,
    replacementStr: string | number,
    occurence?: number
  ): string {
    if (!value || !strToReplace || !replacementStr) {
      return value;
    }
    let result = value;

    if (occurence) {
      result = value.replace(RegExp(`^(?:.*?${strToReplace}){${occurence}}`), (x) =>
        x.replace(RegExp(`${strToReplace}$`), replacementStr.toString())
      );
    } else {
      result = value.replaceAll(strToReplace, replacementStr.toString());
    }

    return result;
  }
}
