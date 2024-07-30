import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class ImportServiceService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  getAllImports() {
    return this.http.get(`${this.base}/import/imports`)
  }
  getAllImportArchive(){
    return this.http.get(`${this.base}/archive/archive-type?typeNumber=1`)
  }
  getAllLastImports() {
    return this.http.get(`${this.base}/import/all-imports`)
  }

  getImportArchiveFile(id: number) {
    return this.http.get(`${this.base}/import/import-archive?id=${id}`)
  }

  getImportsById(id: number) {
    return this.http.get(`${this.base}/import/import-id?id=${id}`)
  }


  getImportPagination(page: number) {
    return this.http.get(`${this.base}/import/imports-pagination?page=${page}`)
  }

  addImportFile(Data: any) {
    return this.http.post(`${this.base}/import/import`, Data)
  }

  addSaveFile(id: number, num: number) {
    return this.http.put(`${this.base}/import/convert-to-special?id=${id}`, num)
  }

  getImportById(id: number) {
    return this.http.get(`${this.base}/import/import-id?id=${id}`)
  }

  updateImport(id: number, data: any) {
    return this.http.put(`${this.base}/import/import-id?id=${id}`, data)
  }

  addImportResponse(id: number, data: any) {
    return this.http.put(`${this.base}/import/import-add-response?id=${id}`, data)
  }

  getImportNumber() {
    return this.http.get(`${this.base}/import/count-current`)
  }

  getLastImportNumber() {
    return this.http.get(`${this.base}/import/count`)
  }

  deleteImage(paths:string[],index:number){
    return  this.http.delete(`${this.base}/image/image?imagePath=${paths[index]}`);
  }
  addImages(id: number, formData: any) {
    return this.http.post<any>(`${this.base}/image/multipleFiles?id=${id}&pathType=imports`, formData)
  }
}
