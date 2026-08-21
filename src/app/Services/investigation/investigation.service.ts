import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  getByPagination(page: number) {
    return this.http.get<Investigation>(`${this.url}/investigation/pagination?page=${page}`);
  }

  getCount() {
    return this.http.get<number>(`${this.url}/investigation/count-current`);
  }

  insert(investigation: Investigation) {
    return this.http.post<Investigation>(`${this.url}/investigation`, investigation);
  }

  update( investigation: Investigation  , id : number) {
    return this.http.put<Investigation>(`${this.url}/investigation/${id}`, investigation);
  }

  addImages(id: number, formData: FormData) {
    return this.http.post<any>(`${this.url}/image/multipleFiles?id=${id}&pathType=investigations`, formData);
  }

  deleteImage(paths: string[], index: number) {
    return this.http.delete(`${this.url}/image/image?imagePath=${paths[index]}`);
  }
}
