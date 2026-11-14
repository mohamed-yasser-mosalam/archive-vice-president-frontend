import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseUrl from "../../url";
import {BackupFile} from "../../Models/backup/backup-file";
import {BackupSchedule} from "../../Models/backup/backup-schedule";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  base=baseUrl

  constructor(private http: HttpClient) { }

  list(): Observable<BackupFile[]> {
    return this.http.get<BackupFile[]>(`${this.base}/database/backups`);
  }

  create(): Observable<BackupFile> {
    return this.http.post<BackupFile>(`${this.base}/database/backups`, null);
  }

  restore(name: string): Observable<string> {
    return this.http.post(`${this.base}/database/backups/${encodeURIComponent(name)}/restore`, null, { responseType: 'text' });
  }

  remove(name: string): Observable<string> {
    return this.http.delete(`${this.base}/database/backups/${encodeURIComponent(name)}`, { responseType: 'text' });
  }

  download(name: string): Observable<Blob> {
    return this.http.get(`${this.base}/database/backups/${encodeURIComponent(name)}/download`, { responseType: 'blob' });
  }

  getSchedule(): Observable<BackupSchedule> {
    return this.http.get<BackupSchedule>(`${this.base}/database/backups/schedule`);
  }

  saveSchedule(s: BackupSchedule): Observable<BackupSchedule> {
    return this.http.put<BackupSchedule>(`${this.base}/database/backups/schedule`, s);
  }
}
