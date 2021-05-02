import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {IPerson} from 'src/app/core/models/Person.interface'
import {IGenderPet} from 'src/app/core/models/GenderPet.interface'

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
  ngOnInit(): any {
    this.apiService.getData().subscribe((data)=>{
         this.PersonData = data as IPerson[];
         this.PersonData.forEach(person => {
          var PersonGender = person.gender;
          var pets = this.GetCatsList(person);
            if(pets != undefined)
            {
              pets.forEach(pet => {
                const genPet = <IGenderPet> {gender: PersonGender,pet: pet.name};
                this.genderPets.push(genPet);
              });
            }
            else
            {
              return;
            }
        });
        this.genderPets.sort((a,b) => (a.pet.localeCompare(b.pet)));
        this.genderPets.sort((a,b) => (a.gender > b.gender ? -1 : 1));
        this.genders = this.genderPets.map(x=>x.gender);
    });
    return "success"; 
  }

  public GetCatsList(person: any) {
    return person.pets?.filter(x => x.type == "Cat");
  }
}


