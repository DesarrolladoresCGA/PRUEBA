import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardsI } from '../../interface/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/";

  constructor(private http: HttpClient) { }

  getTraerCards():Observable<any>{
    let direccion = this.url + "cards";
    return this.http.get<any>(direccion);
  }
}
