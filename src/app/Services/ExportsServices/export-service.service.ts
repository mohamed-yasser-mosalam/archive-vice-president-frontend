import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ExportServiceService {
   constructor(private http:HttpClient) {}
    getAllExports(){
      return this.http.get( 'http://localhost:1200/export/exports' )
    }
    addExportFile(data:any){
    return this.http.post('http://localhost:1200/export/export',data)
   }

  getExportById(id: number){
     return this.http.get(`http://localhost:1200/export/export-id?id=${id}`)
    }

    updateExport(id:number,data:any){
    return this.http.put(`http://localhost:1200/export/export-id?id=${id}`,data)
  }


  addUrgentFile(id:number,data:any){
    return this.http.put(`http://localhost:1200/export/export-add-urgent?id=${id}`,data)
  }
  addExportResponse(id:number,data:any){
    return this.http.put(`http://localhost:1200/export/export-add-response?id=${id}`,data)
  }
  createUser(data:any){
     return this.http.post("http://localhost:1200/register",data)
  }
  findExportBySummary(summary:string){
     return this.http.get(`http://localhost:1200/export/export-summary?summary=${summary}`)
  }
  }
