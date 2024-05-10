import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationServiceService} from "../Security/authentication-service.service";
import {Router,} from "@angular/router";
import baseUrl from "../../url";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  base = baseUrl
  status: number
  data: Check

  constructor(private auth: AuthenticationServiceService, private router: Router,
              private http: HttpClient) {
  }


  checkTokenStatues(): number {
    this.data = new Check(this.auth.getToken(), this.auth.getUserName());
    this.http.post<any>(`${this.base}/is-token-valid`, this.data).subscribe(
      response => {
        this.status = response;
        return response;
      }
    )
    return this.status
  }


}

class Check {
  token: string
  username: string

  constructor(token: string, username: string) {
    this.token = token;
    this.username = username;
  }
}
