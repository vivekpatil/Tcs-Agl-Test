import { PetsPipe } from './pets.pipe';

describe('PetsPipe', () => {
  it('create an instance', () => {
    const pipe = new PetsPipe();
    expect(pipe).toBeTruthy();
  });
});
