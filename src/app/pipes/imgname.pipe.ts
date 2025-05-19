import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgname'
})
export class ImgnamePipe implements PipeTransform {
  transform(filename: string): string {
    if (!filename) return '';
    const name = filename.split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
