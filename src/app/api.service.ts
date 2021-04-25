import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(`http://agl-developer-test.azurewebsites.net/people.json`).pipe(map(response=>response));
    
  }
}

