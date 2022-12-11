import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0, 80) + '....';
  }

}
