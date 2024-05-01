import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=baseUrl
  constructor(private http:HttpClient) { }

  addImages(userName: any, id: string, formDate: any) {
    return this.http.post<any>(`${this.base}/user/add-image?pathType=users&username=${userName}&id=${id}`,formDate)
  }

}
