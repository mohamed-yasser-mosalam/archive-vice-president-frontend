import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../../Models/task/task";
import baseUrl from "../../url";
import {Investigation} from "../../Models/investigation/investigation";

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {

  url = baseUrl;

  constructor(private http : HttpClient) { }

  findAll() {
    return this.http.get<Investigation[]>(`${this.url}/investigation`);
  }

  findById(id: number) {
    return this.http.get<Investigation>(`${this.url}/investigation/${id}`);
  }

  insert(investigation: Investigation) {
    return this.http.post<Investigation>(`${this.url}/investigation`, investigation);
  }

  update( investigation: Investigation  , id : number) {
    return this.http.put<Investigation>(`${this.url}/investigation/${id}`, investigation);
  }
}
