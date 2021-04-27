import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(this.apiUrl).pipe(map(response=>response));
    
  }
}

