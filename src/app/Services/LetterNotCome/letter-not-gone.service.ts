import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LetterNotGoneService {

  constructor(private http:HttpClient) {}
    getAllLetterNotCome(){
      return this.http.get( 'http://localhost:1200/import/import-response-date-not-time' )

  }
}
