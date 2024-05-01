import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class LetterHasGoneService {
  base=baseUrl
  constructor(private http:HttpClient) { }

  getAllLetterHasGone(){
    return this.http.get( `${this.base}/import/import-response-date-is-time` )
  }
}
