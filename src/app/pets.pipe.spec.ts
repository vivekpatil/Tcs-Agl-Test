import { IGenderPet } from './core/models/GenderPet.interface';
import { PetsPipe } from './pets.pipe';

describe('PetsPipe', () => {
  const pipe = new PetsPipe();
    const genderPetData : IGenderPet[] = [
    {gender :"Male",  pet:"a"},
    {gender :"Female",pet:"a"},
    {gender :"Male",  pet:"b"},
    {gender :"Male",  pet:"c"},
    {gender :"Female",  pet:"d"},
];
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return pets with key as "Male"', () => {
    expect(pipe.transform(genderPetData,"Male")).toEqual(['a','b','c']);
  });
  
  it('return pets with key as "Female"', () => {
    expect(pipe.transform(genderPetData,"Female")).toEqual(['a','d']);
  });

});
