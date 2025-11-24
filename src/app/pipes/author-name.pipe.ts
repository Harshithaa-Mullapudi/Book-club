import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'authorName' })
export class AuthorNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value
      .split(' ')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}
