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
  getDaysOfMandate(){
    return this.http.get(`${this.base}/deputation/deputation-days`)
  }
  getAllSpecialMandate() {
    return this.http.get(`${this.base}/deputation/exception-deputation`);
  }
  getAllNotSpecialMandate() {
    return this.http.get(`${this.base}/deputation/non-exception-deputation`);
  }
  getAllSpecialUniversity() {
    return this.http.get(`${this.base}/university/university`);
  }
  getMandateById(id:number) {
    return this.http.get(`${this.base}/deputation/deputation?id=${id}`);
  }

  updateMandate(id: number, data: any) {
    return this.http.put(`${this.base}/deputation/deputation?id=${id}`, data)
  }
  deleteSpecialUniversity(universityName:any){
    return this.http.delete(`${this.base}/university/university/${universityName}`)
  }
  addSpecialUniversity(data:any){
    return this.http.post(`${this.base}/university/university`,data)
  }
  getAllAcceptsMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-accepted-deputations`);
  }
  getAllRefusedMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-not-accepted-deputations`);
  }
  getAllSpecialMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-exception-deputation`);
  }
  getAllNotSpecialMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-non-exception-deputation`);
  }

  getAllMandateNumbers() {
    return this.http.get(`${this.base}/deputation/count-deputations `);
  }
  getCurrentMandateNumber() {
    return this.http.get(`${this.base}/deputation/count-current-deputations`);
  }

}
