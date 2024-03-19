import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationServiceService} from "../Security/authentication-service.service";


@Injectable({
  providedIn: 'root'
})
export class ExportServiceService {
   constructor(private http:HttpClient,private auth:AuthenticationServiceService) {}
    getAllExports(){
      return this.http.get( 'http://localhost:1200/export/exports' )
    }
  getAllLastExports(){
    return this.http.get( 'http://localhost:1200/export/all-exports' )
  }
   getExportsById(id:number){
    return this.http.get( `http://localhost:1200/export/export-archive?id=${id}` )
  }
    addExportFile(data:any){
    return this.http.post('http://localhost:1200/export/export',data)
   }

  getExportById(id: number){
     return this.http.get(`http://localhost:1200/export/export-id?id=${id}`)
    }
  getExportByPagination(page: number){
    return this.http.get(`http://localhost:1200/export/exports-pagination?page=${page}`)
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

  }
