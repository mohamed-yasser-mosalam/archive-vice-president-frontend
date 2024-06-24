import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class SignsService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  addSign(data: any) {
    return this.http.post(`${this.base}/sign/sign`, data)
  }

  updateSigns(id: number, data: any) {
    return this.http.put(`${this.base}/sign/sign?id=${id}`, data)
  }

  getSignsByPage(page: number) {
    return this.http.get(`${this.base}/sign/sign-pagination?page=${page}`)
  }

  getLastSignsByPage(page: number) {
    return this.http.get(`${this.base}/sign/all-sign-pagination?page=${page}`)
  }

  getAllSigns() {
    return this.http.get(`${this.base}/sign/signs`)
  }

  getLastSins() {
    return this.http.get(`${this.base}/sign/all-signs`)
  }

  getNumberOfAllSigns() {
    return this.http.get(`${this.base}/sign/count`)
  }

  getNumberOfSigns() {
    return this.http.get(`${this.base}/sign/count-current`)
  }

}
