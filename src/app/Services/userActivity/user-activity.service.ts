import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  constructor( private http:HttpClient) { }

 getUserActivity(){
    return this.http.get(`http://localhost:1200/user/user-activity`)
 }
}
