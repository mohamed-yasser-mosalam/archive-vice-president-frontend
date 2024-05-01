import {Injectable, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Security/authentication-service.service";
import {
  CanActivate,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationServiceService,private router:Router) {
  }

  canActivate( ): any   {
    if (this.auth.getUserRoles()=="user")
      return this.router.navigateByUrl('/home');
  }
}
