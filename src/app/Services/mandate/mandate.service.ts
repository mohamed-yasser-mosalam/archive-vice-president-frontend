import { Injectable } from '@angular/core';
import baseUrl from "../../url";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MandateService {

  base = baseUrl

  constructor(private http: HttpClient) {
  }

  getAllMandate() {
    return this.http.get(`${this.base}/deputation/deputations`);
  }
}
