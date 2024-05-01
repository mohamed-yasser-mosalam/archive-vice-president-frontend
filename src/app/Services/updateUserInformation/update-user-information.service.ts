import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserInformationService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  getUserInformationById(id: number) {
    return this.http.get(`${this.base}/user/user?id=${id}`)
  }

  getAllUsers() {
    return this.http.get(`${this.base}/user/users`)
  }


  update(id: number, data: any) {
    return this.http.put(`${this.base}/user/user?id=${id}`, data)
  }

  changePassword(username: string, data: any) {
    return this.http.put(`${this.base}/user/changePassword?username=${username}`, data)
  }

  changePasswordByAdmin(id: number, newPassword: number) {
   return  this.http.put(`${this.base}/user/changePassword-admin?id=${id}`, newPassword)
  }


}
