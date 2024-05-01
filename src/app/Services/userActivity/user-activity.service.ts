import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {
base=baseUrl
  constructor( private http:HttpClient) { }

 getUserActivity(){
    return this.http.get(`${this.base}/user/user-activity`)
 }
}
