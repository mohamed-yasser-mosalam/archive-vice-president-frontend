import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";
import {ArchiveFile} from "../../Models/addArchiveFile/archive-file";

@Injectable({
  providedIn: 'root'
})
export class AllFilesService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  getAllFile() {
    return this.http.get(`${this.base}/archive/archives`);
  }

  getById(id: number) {
    return this.http.get<ArchiveFile>(`${this.base}/archive/archive-id?id=${id}`);
  }

  getByType(type: number) {
    return this.http.get<ArchiveFile>(`${this.base}/archive/archive-type?typeNumber=${type}`);
  }

  saveArchiveFile(archiveFile: ArchiveFile) {
    return this.http.post(`${this.base}/archive/archive`, archiveFile);
  }

  updateArchiveFile(id: number, name: any) {
    return this.http.put(`${this.base}/archive/archive-name?id=${id}`, name)
  }


  deleteArchiveFile(typeNumber, num) {
    return this.http.delete(`${this.base}/archive/archive?typeNumber=${typeNumber}&num=${num}`);
  }

  closeArchiveFile(data: any) {
    return this.http.post(`${this.base}/archive/close`, data);
  }

  getStateCloseArchiveFile() {
    return this.http.get(`${this.base}/archive/can-closed`);
  }
}

