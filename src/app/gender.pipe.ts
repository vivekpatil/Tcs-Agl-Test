import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    
    let uniqueArray = Array.from(new Set(value));

    return uniqueArray;
  }

}
