import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient) { }

  createUser(data:any){
    return this.http.post("http://localhost:1200/register?id=10&pathType=users",data)
  }


}
