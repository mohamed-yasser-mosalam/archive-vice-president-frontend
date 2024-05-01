import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationServiceService} from "../Security/authentication-service.service";
import baseUrl from "../../url";


@Injectable({
  providedIn: 'root'
})
export class ExportServiceService {
  base = baseUrl

  constructor(private http: HttpClient, private auth: AuthenticationServiceService) {
  }

  getAllExports() {
    return this.http.get(`${this.base}/export/exports`)
  }

  getAllLastExports() {
    return this.http.get(`${this.base}/export/all-exports`)
  }

  getExportsById(id: number) {
    return this.http.get(`${this.base}/export/export-id?id=${id}`)
  }

  getExportArchiveFile(id: number) {
    return this.http.get(`${this.base}/export/export-archive?id=${id}`)
  }

  addExportFile(data: any) {
    return this.http.post(`${this.base}/export/export`, data)
  }

  addSaveFile(id: number, num: number) {
    return this.http.put(`${this.base}/export/convert-to-special?id=${id}`, num)
  }

  getExportById(id: number) {
    return this.http.get(`${this.base}/export/export-id?id=${id}`)
  }

  getExportByPagination(page: number) {
    return this.http.get(`${this.base}/export/exports-pagination?page=${page}`)
  }

  updateExport(id: number, data: any) {
    return this.http.put(`${this.base}/export/export-id?id=${id}`, data)
  }

  getExportNumber() {
    return this.http.get(`${this.base}/export/count-current`)
  }

  getLastExportNumber() {
    return this.http.get(`${this.base}/export/count`)
  }

  addImages(id: number, formData: any) {
    return this.http.post<any>(`${this.base}/image/multipleFiles?id=${id}&pathType=exports`, formData)
  }

  addUrgentFile(id: number, data: any) {
    return this.http.put(`${this.base}/export/export-add-urgent?id=${id}`, data)
  }

  addExportResponse(id: number, data: any) {
    return this.http.put(`${this.base}/export/export-add-response?id=${id}`, data)
  }

  deleteImage(paths:string[],index:number){
    return  this.http.delete(`${this.base}/image/image?imagePath=${paths[index]}`);
  }

}
