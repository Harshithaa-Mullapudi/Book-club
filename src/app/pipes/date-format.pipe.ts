import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortDate' })
export class ShortDatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const d = new Date(value);
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
