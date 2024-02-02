import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LetterHadGoneServiceService {

  constructor(private http:HttpClient) { }

  getAllLetterHadGone(){
    return this.http.get( 'http://localhost:1200/import/import-response-date-passed' )
  }
}
