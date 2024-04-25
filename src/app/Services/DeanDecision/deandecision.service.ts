import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeandecisionService {

  constructor(private http:HttpClient) { }
  getDeanDecision(){
    return this.http.get(`http://localhost:1200/dean-decisions/decisions`)
  }
  addDeanDecision(date:any){
    return this.http.post(`http://localhost:1200/dean-decisions/decision`,date)
  }
  updateDeanDecision(id:number,data:any){
   return this.http.put(`http://localhost:1200/dean-decisions/decision?id=${id}`,data)
  }
  getDeanDecisionByPage(page:number){
    return this.http.get(`http://localhost:1200/dean-decisions/decisions-pagination?page=${page}`)
  }
 addImages(id:number,formData:any) {
  return  this.http.post<any>(`http://localhost:1200/image/multipleFiles?id=${id}&pathType=decisions`, formData)
 }
 deleteImage(paths:string[],index:number){
   this.http.delete(`http://localhost:1200/image/image?imagePath=${paths[index]}`);
 }
 getNumberOfDeanDecision(){
    return this.http.get(`http://localhost:1200/dean-decisions/count`)
}}
