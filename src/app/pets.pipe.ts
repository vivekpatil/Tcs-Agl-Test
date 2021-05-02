import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petsPipe'
})
export class PetsPipe implements PipeTransform {

  transform(value: any, ownerGender: string): any {
    if (!value) return value;
    let pets = value.filter(x=>x.gender == ownerGender).map(x=>x.pet);
    return pets;
  }

}
