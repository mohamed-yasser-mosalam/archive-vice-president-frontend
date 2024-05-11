import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class ActivateUserService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  activateUser(username: string) {
    this.http.post(`${this.base}/user/activated?username=${username}`, null).subscribe()
  }

  unActivateUser(username: string) {
    this.http.post(`${this.base}/user/unactivated?username=${username}`, null).subscribe()
  }
}
