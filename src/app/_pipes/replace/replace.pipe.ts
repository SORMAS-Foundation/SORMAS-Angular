import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  transform(
    value: string,
    strToReplace: string,
    replacementStr: string,
    occurence?: number
  ): string {
    if (!value || !strToReplace || !replacementStr) {
      return value;
    }
    let result = value;

    if (occurence) {
      result = value.replace(RegExp(`^(?:.*?${strToReplace}){${occurence}}`), (x) =>
        x.replace(RegExp(`${strToReplace}$`), replacementStr)
      );
    } else {
      result = value.replaceAll(strToReplace, replacementStr);
    }

    return result;
  }
}
