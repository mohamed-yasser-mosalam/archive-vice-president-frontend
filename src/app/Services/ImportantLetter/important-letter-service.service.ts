import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class ImportantLetterServiceService {
  base=baseUrl
  constructor(private http:HttpClient) { }

  getAllImportantLetter(){
    return this.http.get( `${this.base}/import/import-important` )
  }
}
