import { Injectable } from '@angular/core';
import Url from "../../url";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  base=baseUrl

  constructor(private http: HttpClient) { }

  backupDatabase(): Observable<string> {
    return this.http.post(`${this.base}/database/backup`, null, { responseType: 'text' });
  }

  restoreDatabase(): Observable<string> {
    return this.http.post(`${this.base}/database/restore`, null, { responseType: 'text' });
  }
}
