import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class LetterHadGoneServiceService {
  base=baseUrl
  constructor(private http:HttpClient) { }

  getAllLetterHadGone(){
    return this.http.get( `${this.base}/import/import-response-date-passed` )
  }
}
