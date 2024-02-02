import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodayServiceService {

    constructor(private http: HttpClient) {
    }

    getAllTodayExport() {
        return this.http.get('http://localhost:1200/export/export-date')
    }

    getAllTodayImport() {
        return this.http.get('http://localhost:1200/import/import-date')
    }

}
