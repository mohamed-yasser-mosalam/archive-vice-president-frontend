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
  getAllLastImports(){
    return this.http.get('http://localhost:1200/import/all-imports')
  }
  getImportsById(id:number){
    return this.http.get(`http://localhost:1200/import/import-archive?id=${id}`)
  }
  getImportPagination(page:number){
    return this.http.get(`http://localhost:1200/import/imports-pagination?page=${page}`)
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
  uploadImage(page:number,file: File) {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post<any>(`http://localhost:1200/image/multipleFiles?id=${page}&pathType=imports`, formData);
  }

}
