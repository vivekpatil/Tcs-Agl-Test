import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {IPerson} from 'src/app/core/models/Person.interface'
import {IGenderPet} from 'src/app/core/models/GenderPet.interface'
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService: ApiService) { }
  title = 'Tcs-Agl-test';
  PersonData: any[];
  genderPets: Array<IGenderPet> = [];
  genders: string[];
  ngOnInit(): void {
    this.apiService.getData().subscribe((data)=>{
         console.log(data);
         this.PersonData = data as IPerson[];
         this.PersonData.forEach(person => {
          var PersonGender = person.gender;
          var pets = person.pets?.filter(x=>x.type=="Cat");
            if(pets != undefined)
            {
              pets.forEach(pet => {
                const genPet = <IGenderPet> {gender: PersonGender,pet: pet.name};
                this.genderPets.push(genPet);
              });
            }
        });
        this.genderPets.sort((a,b) => (a.pet.localeCompare(b.pet)));
        this.genderPets.sort((a,b) => (a.gender > b.gender ? -1 : 1));
        this.genders = this.genderPets.map(x=>x.gender);
    }); 
  }
}


