import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LetterHasGoneService {

  constructor(private http:HttpClient) { }

  getAllLetterHasGone(){
    return this.http.get( 'http://localhost:1200/import/import-response-date-is-time' )
  }
}
