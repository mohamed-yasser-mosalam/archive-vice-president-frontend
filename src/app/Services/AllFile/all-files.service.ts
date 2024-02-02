import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllFilesService {

  constructor(private http:HttpClient) {
  }
  getAllFile(){
    return this.http.get('http://localhost:1200/archive/archives')
  }

}
