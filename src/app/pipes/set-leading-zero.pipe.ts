import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setLeadingZero'
})
export class SetLeadingZeroPipe implements PipeTransform {

  transform(input: number): string {
    if (input < 10) {
      return `0` + input.toString()
    } else {
      return input.toString()
    }
  }

}