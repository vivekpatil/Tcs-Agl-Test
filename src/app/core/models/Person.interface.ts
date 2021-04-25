import {Pet} from './Pet.interface'

export interface IPerson { 
	"name": string,
	"gender": string,
	"age": number
	"pets": {
        [key: string]: Pet
    };
}