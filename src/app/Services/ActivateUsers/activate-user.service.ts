import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActivateUserService {

  constructor(private http:HttpClient) { }

  activateUser(username:string){
   this.http.get(`http://localhost:1200/user/activated?username=${username}`)
  }
  unActivateUser(username:string){
   return  this.http.get(`http://localhost:1200/user/unactivated?username=${username}`)
   }
}
