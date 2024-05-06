import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";
import {Users} from "../../Models/Users/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base = baseUrl
  user: Users


  constructor(private http: HttpClient) {
  }

  addImages(userName: any, id: string, formDate: any) {
    return this.http.post<any>(`${this.base}/user/add-image?pathType=users&username=${userName}&id=${id}`, formDate)
  }

  getUserById(id: number) {
    return this.http.get(`${this.base}/user/user?id=${id}`)
  }

  getUserByUserName(username: string) {
    this.http.get(`${this.base}/user/user-username?username=${username}`).subscribe((result: any) => {
      this.user = result;
    })
    return this.user;
  }

  getCountOfUser() {
    return this.http.get(`${this.base}/user/count`)
  }

}

