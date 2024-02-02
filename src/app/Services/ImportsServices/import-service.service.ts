import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImportServiceService {

  constructor(private http:HttpClient) { }
  getAllImports(){
    return this.http.get('http://localhost:1200/import/imports')
  }
  addImportFile( Data:any){
    return this.http.post('http://localhost:1200/import/import',Data)
  }
  getImportById(id:number){
    return this.http.get(`http://localhost:1200/import/import-id?id=${id}`)
  }

  updateImport(id:number,data:any){
    return this.http.put(`http://localhost:1200/import/import-id?id=${id}`,data)
  }

  addImportResponse(id:number,data:any){
    return this.http.put(`http://localhost:1200/import/import-add-response?id=${id}`,data)
  }

}
