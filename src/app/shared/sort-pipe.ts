import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort', standalone: true })
export class SortPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!items) return [];
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }
}