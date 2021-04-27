import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  
  const pipe = new GenderPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "[a,a,b,b,c]" to "[a,b,c]"', () => {
    expect(pipe.transform([ 'a', 'a', 'b','b','c' ])).toEqual(['a','b','c']);
  });

  it('transforms "[a,b,c,a,b]" to "[a,b,c]"', () => {
    expect(pipe.transform([ 'a', 'b', 'c','a','b' ])).toEqual(['a','b','c']);
  });

});


