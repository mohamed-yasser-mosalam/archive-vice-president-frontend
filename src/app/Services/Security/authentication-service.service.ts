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
          sessionStorage.setItem("imagePath",response.imagePath)
          sessionStorage.setItem("username",response.name)
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          return response;
        }))
  }

  getUserImage(){
    return sessionStorage.getItem('imagePath')||"";
  }
  getUserName(){
    return sessionStorage.getItem('username')||"";
  }
  getToken() {
    return sessionStorage.getItem('token')||"";
  }
  clearToken(){
     sessionStorage.clear()
  }
}
