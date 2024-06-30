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
  addMandate(data: any) {
    return this.http.post(`${this.base}/deputation/deputation`, data)
  }
  getAllMandate() {
    return this.http.get(`${this.base}/deputation/deputations`);
  }
  updateMandate(id: number, data: any) {
    return this.http.put(`${this.base}/deputation/deputation?id=${id}`, data)
  }
}
