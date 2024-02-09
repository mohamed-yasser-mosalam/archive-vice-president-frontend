import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor( private http:HttpClient) {
  }
  getAllSpecials(){
    return this.http.get( 'http://localhost:1200/special/specials')
  }
}
