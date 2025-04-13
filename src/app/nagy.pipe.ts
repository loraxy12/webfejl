import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nagy',
  standalone: true
})
export class NagyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }
}
