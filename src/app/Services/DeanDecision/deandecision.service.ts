import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class DeandecisionService {
  base=baseUrl

  constructor(private http:HttpClient) { }
  getDeanDecision(){
    return this.http.get(`${this.base}/dean-decisions/decisions`)
  }
  getAllLastDeanDecision(){
    return this.http.get( `${this.base}/dean-decisions/all-decisions` )
  }
  addDeanDecision(date:any){
    return this.http.post(`${this.base}/dean-decisions/decision`,date)
  }
  updateDeanDecision(id:number,data:any){
   return this.http.put(`${this.base}/dean-decisions/decision?id=${id}`,data)
  }
  getDeanDecisionByPage(page:number){
    return this.http.get(`${this.base}/dean-decisions/decisions-pagination?page=${page}`)
  }
  getDeanDecisionById(id:number){
    return this.http.get(`${this.base}/dean-decisions/decision?id=${id}`)
  }
 addImages(id:number,formData:any) {
  return  this.http.post<any>(`${this.base}/image/multipleFiles?id=${id}&pathType=decisions`, formData)
 }
 deleteImage(paths:string[],index:number){
   this.http.delete(`${this.base}/image/image?imagePath=${paths[index]}`);
 }
 getNumberOfDeanDecision(){
    return this.http.get(`${this.base}/dean-decisions/count-current`)
}
  getNumberOfLastDeanDecision(){
    return this.http.get(`${this.base}/dean-decisions/count`)
  }
}
