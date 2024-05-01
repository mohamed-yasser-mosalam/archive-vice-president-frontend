import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class SpecialService {
base=baseUrl
  constructor( private http:HttpClient) {
  }
  getAllSpecials(){
    return this.http.get( `${this.base}/special/specials`)
  }
  getAllLastSpecials(){
    return this.http.get( `${this.base}/special/all-specials`)
  }

  getSpecialArchiveFile(id:number){
    return this.http.get(`${this.base}/special/special-archive?id=${id}`)
  }
  getSpecialsById(id:number){
    return this.http.get( `${this.base}/special/special-id?id=${id}` )
  }

  getSpecialNumber(){
    return this.http.get(`${this.base}/special/count-current`)
  }
  getLastSpecialNumber(){
    return this.http.get(`${this.base}/Special/count`)
  }
  getSpecialsByPagination(id:number){
    return this.http.get(`${this.base}/special/specials-pagination?page=${id}`)
  }

  updateSpecial(id:number,data:any){
    return this.http.put(`${this.base}/special/special`,data)
  }
  addSpecialFile(data:any){
    return  this.http.post(`${this.base}/special/special`,data)
  }

}
