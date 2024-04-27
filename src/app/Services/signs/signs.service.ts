import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignsService {
  constructor(private http: HttpClient) {
  }

  addSign(data: any) {
    return this.http.post(`http://localhost:1200/sign/sign`, data)
  }

  updateSigns(id:number,data:any) {
  return this.http.put(`http://localhost:1200/sign/sign?id=${id}`,data)
  }

  getSignsByPage(page:number) {
   return this.http.get(`http://localhost:1200/sign/sign-pagination?page=${page}`)
  }
  getAllSigns(){
    return this.http.get(`http://localhost:1200/sign/signs`)
  }

  getNumberOfSigns(){
    return this.http.get(`http://localhost:1200/sign/count`)
  }

}
