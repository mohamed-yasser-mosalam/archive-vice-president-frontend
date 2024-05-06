import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";
import baseUrl from "../../url";
import {jwtDecode} from "jwt-decode";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService implements OnInit {
  base = baseUrl

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.canActivate();

  }

  executeAuthentication(username, password): Observable<any> {
    return this.http.post<any>(`${this.base}/login`, {username, password})
      .pipe(map(
        response => {
          sessionStorage.setItem("token", `Bearer ${response.token}`)
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

  /**
   * get username from token
   **/
  getUserName() {
    return this.decodeToken().sub || '';
  }


  getuserId() {
    return this.userService.getUserByUserName(this.getUserName()).id.toString()
  }

  getName() {
    return this.userService.getUserByUserName(this.getUserName()).firstName + ' ' + this.userService.getUserByUserName(this.getUserName()).lastName
  }

  getUserRoles() {
    return this.userService.getUserByUserName(this.getUserName()).roles.toString()
  }

  getUserImage() {
    return this.userService.getUserByUserName(this.getUserName()).imagePath.toString()
  }

  clearToken() {
    sessionStorage.clear()
  }

  canActivate(): any {
    if (sessionStorage.getItem('roles') != 'admin')
      return this.router.navigateByUrl('/home');
  }


}
