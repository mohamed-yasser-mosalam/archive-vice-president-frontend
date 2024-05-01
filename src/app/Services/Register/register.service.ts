import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  base=baseUrl

  constructor( private http:HttpClient) { }

  createUser(data:any){
    return this.http.post(`${this.base}/register?id=10&pathType=users`,data)
  }


}
