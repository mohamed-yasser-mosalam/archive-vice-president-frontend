import {Injectable, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Security/authentication-service.service";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationServiceService) {
  }

  canActivate( ): any   {
    if (this.auth.getUserRoles()!="user")
      return true;    }


}
