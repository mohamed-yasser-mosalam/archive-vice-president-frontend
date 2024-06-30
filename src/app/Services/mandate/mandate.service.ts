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
  getAllAcceptsMandate() {
    return this.http.get(`${this.base}/deputation/accepted-deputations`);
  }
  getAllRefusedMandate() {
    return this.http.get(`${this.base}/deputation/not-accepted-deputations`);
  }
  getCurrentMandate() {
    return this.http.get(`${this.base}/deputation/current-deputations`);
  }
  getAllTodayMandate() {
    return this.http.get(`${this.base}/deputation/today-deputations`);
  }
  getAllTodayDoctors() {
    return this.http.get(`${this.base}/deputation/today-in`);
  }
  updateMandate(id: number, data: any) {
    return this.http.put(`${this.base}/deputation/deputation?id=${id}`, data)
  }
  getAllAcceptsMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-accepted-deputations`);
  }
  getAllRefusedMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-not-accepted-deputations`);
  }
  getAllMandateNumbers() {
    return this.http.get(`${this.base}/deputation/count-deputations `);
  }
  getCurrentMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-current-deputations`);
  }

}
