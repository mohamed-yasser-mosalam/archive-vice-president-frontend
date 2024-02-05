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

  getUserInformationById(id:number){
    return this.http.get(`http://localhost:1200/user/user?id=${id}`)
  }


  update(id :number,data:any){
    return this.http.put(`http://localhost:1200/user/user?id=${id}`,data)
  }
}
