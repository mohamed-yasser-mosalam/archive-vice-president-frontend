import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "../../url";

@Injectable({
  providedIn: 'root'
})
export class AllFilesService {
  base=baseUrl
  constructor(private http:HttpClient) {
  }
  getAllFile(){
     return this.http.get(`${this.base}/archive/archives`)
  }

}
