import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class LetterNotGoneService {
  base=baseUrl
  constructor(private http:HttpClient) {}
    getAllLetterNotCome(){
      return this.http.get( `${this.base}/import/import-response-date-not-time`)

  }
}
