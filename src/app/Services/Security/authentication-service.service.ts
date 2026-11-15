import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import baseUrl from "../../url";
import {jwtDecode} from "jwt-decode";
import {PermissionService} from "./permission.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  base = baseUrl

  constructor(private http: HttpClient, private permissions: PermissionService) {
  }

  executeAuthentication(username: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.base}/login`, {username, password})
      .pipe(map(
        response => {
          sessionStorage.setItem("token", `Bearer ${response.token}`)
          sessionStorage.setItem("id", response.id)
          return response;
        }))
  }


  /** get token from sessionStorage */

  getToken() {
    return sessionStorage.getItem('token') || "";
  }

  /**
   * decode jwt token
   * @return JwtPayload
   */
  decodeToken() {
    return jwtDecode(this.getToken());
  }


  getuserId() {
    // return this.decodeToken().id || '';
    return sessionStorage.getItem('id') || ''
  }

  getName() {
    return this.decodeToken().iss || '';
  }

  /**
   * get username from token
   **/
  getUserName() {
    return this.decodeToken().sub || '';
  }


  getUserImage() {
    return this.decodeToken().aud || '';
  }

  clearToken() {
    sessionStorage.clear()
    this.permissions.clear()
  }
}
