import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserInformationService {

  constructor( private http:HttpClient) { }
  getUserInformationById(id:number){
    return this.http.get(`http://localhost:1200/user/user?id=${id}`)
  }

  getAllUsers(){
    return this.http.get('http://localhost:1200/user/users')
  }


  update(id :number,data:any) {
    return this.http.put(`http://localhost:1200/user/user?id=${id}`, data)
  }
changePassword(username:string,data:any){
  return this.http.put(`http://localhost:1200/user/changePassword?username=${username}`,data)
}
changePasswordByAdmin(username:string,id:number){
    return this.http.put(`http://localhost:1200/user/changePassword-admin?username=${username}&password=${id}`,null)
}
}
