import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'form'
})
export class FormPipe implements PipeTransform {
  transform(value: number): string {
    if (!value && value !== 0) return '';
    return value.toLocaleString('hu-HU') + ' Ft';
  }
}
