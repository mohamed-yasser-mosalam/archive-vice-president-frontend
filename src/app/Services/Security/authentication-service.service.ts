import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { }

  executeAuthentication(username,password):Observable<any>{
    return this.http.post<any>('http://localhost:1200/login',{username,password})
      .pipe(map(
        response=>{
          sessionStorage.setItem('roles',response.roles)
          sessionStorage.setItem('id',response.id)
          sessionStorage.setItem("imagePath",response.imagePath)
          sessionStorage.setItem("username",response.username)
          sessionStorage.setItem("name",response.name)
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          return response;
        }))
  }

  getUserRoles(){
   return sessionStorage.getItem('roles')||""
  }
  getuserId() {
    return sessionStorage.getItem('id')||""
  }
  getUserImage(){
    return sessionStorage.getItem('imagePath')||"";
  }
  getName(){
    return sessionStorage.getItem('name')||"";
  }
  getUserName(){
    return sessionStorage.getItem('username')||"";
  }
  getToken() {
    return sessionStorage.getItem('token')||"";
  }
  clearToken() {
    sessionStorage.clear()
  }

}
