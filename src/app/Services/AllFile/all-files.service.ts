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

  saveArchiveFile(archiveFile: ArchiveFile) {
    return this.http.post(`${this.base}/archive/archive`, archiveFile);
  }


  deleteArchiveFile(typeNumber, num) {
    return this.http.delete(`${this.base}/archive/archive?typeNumber=${typeNumber}&num=${num}`);
  }
}
