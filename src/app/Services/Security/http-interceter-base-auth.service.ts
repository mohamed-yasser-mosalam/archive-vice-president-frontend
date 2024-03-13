import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationServiceService} from "./authentication-service.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceterBaseAuthService implements HttpInterceptor {

  constructor(private auth:AuthenticationServiceService) {
  }

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.auth.getToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    return next.handle(authReq);

  }
}
