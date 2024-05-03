import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class TodayServiceService {
  base = baseUrl

  constructor(private http: HttpClient) {
  }

  getAllTodayExport() {
    return this.http.get(`${this.base}/export/export-date`)
  }

  getAllTodayImport() {
    return this.http.get(`${this.base}/import/import-date`)
  }
}
