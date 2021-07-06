import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapWord',
})
export class WrapWordPipe implements PipeTransform {
  transform(value: string | null | undefined, context?: string): string {
    if (!value) {
      return '';
    }

    const words: string[] = [];
    const selector = context || 'word';

    value.split(' ').forEach((word: string, index: number) => {
      words.push(`<span class="${selector}-item-${index + 1}">${word}</span>`);
    });

    return `<span class="${selector}">${words.join(' ')}</span>`;
  }
}
