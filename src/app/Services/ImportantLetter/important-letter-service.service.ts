import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImportantLetterServiceService {

  constructor(private http:HttpClient) { }

  getAllImportantLetter(){
    return this.http.get( 'http://localhost:1200/import/import-important' )
  }
}
