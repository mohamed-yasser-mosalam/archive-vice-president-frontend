import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  base = baseUrl
  status: number

  constructor(private http: HttpClient) {
  }


  checkTokenStatues(token: string, username: string): number {
    this.http.get<any>(`${this.base}/is-token-valid?token=${token}&username=${username}`).subscribe(
      response => {
        this.status = response;
        return response;})
    return this.status
  }


}


