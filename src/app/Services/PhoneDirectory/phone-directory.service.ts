import {Injectable} from '@angular/core';
import baseUrl from "../../url";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhoneDirectoryService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  addTeachingPhoneDirectory(data: any) {
   return  this.http.post(`${this.base}/t-phone/t-phone`, data)
  }

  addFacultyPhoneDirectory(data: any) {
   return  this.http.post(`${this.base}/f-phone/f-phone`, data)
  }

  deleteTeachingPhoneDirectory(id:number) {
    return this.http.delete(`${this.base}/t-phone/t-phone?id=${id}`)
  }

  deleteFacultyPhoneDirectory(id: number) {
   return  this.http.delete(`${this.base}/f-phone/f-phone?id=${id}`)
  }

  showAllTeachingPhoneDirectory() {
   return  this.http.get(`${this.base}/t-phone/t-phones`)
  }

  showAllFacultyPhoneDirectory() {
   return  this.http.get(`${this.base}/f-phone/f-phones`)
  }
}
