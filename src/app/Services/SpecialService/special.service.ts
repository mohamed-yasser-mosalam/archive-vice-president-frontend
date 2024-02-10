import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor( private http:HttpClient) {
  }
  getAllSpecials(){
    return this.http.get( 'http://localhost:1200/special/specials')
  }
  getSpecialFileById(id:number){
    return this.http.get(`http://localhost:1200/special/special?id=${id}`)
  }
  getExportById(id: number){
    return this.http.get(`http://localhost:1200/export/export-id?id=${id}`)
  }
  updateSpecial(data:any){
    return this.http.put(`http://localhost:1200/special/special`,data)
  }

}
