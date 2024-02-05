import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationServiceService} from "../Security/authentication-service.service";

@Injectable({
  providedIn: 'root'
})
export class RouteActivatedServiceService {



}
