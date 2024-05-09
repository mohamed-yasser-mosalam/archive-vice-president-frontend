import {Injectable, OnInit} from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AuthenticationServiceService} from "../Security/authentication-service.service";
import {
  CanActivate,
  Router,
} from "@angular/router";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  base = baseUrl
  status: any

  constructor(private auth: AuthenticationServiceService, private router: Router,
              private http: HttpClient) {
  }


  checkStatues(token: any, username: any) {
   return  this.http.get<any>(`${this.base}/is-token-valid?token=${token}&username=${username}`)
    // return (this.status)
  }
  check(){
    this.checkStatues(this.auth.getToken(),this.auth.getUserName()).subscribe((res:any)=>{
   this.status=res
    })
    return this.status==1

  }

}
