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
    return this.http.get(`${this.base}/special/count`)
  }
  getSpecialsByPagination(id:number){
    return this.http.get(`${this.base}/special/specials-pagination?page=${id}`)
  }

  updateSpecial(id:number,data:any){
    return this.http.put(`${this.base}/special/special?id=${id}`,data)
  }
  addSpecialFile(data:any){
    return  this.http.post(`${this.base}/special/special`,data)
  }

  addImages(id: number, formData: any) {
    return this.http.post<any>(`${this.base}/image/multipleFiles?id=${id}&pathType=specials`, formData)
  }
  deleteImage(paths:string[],index:number){
    return  this.http.delete(`${this.base}/image/image?imagePath=${paths[index]}`);
  }

}
