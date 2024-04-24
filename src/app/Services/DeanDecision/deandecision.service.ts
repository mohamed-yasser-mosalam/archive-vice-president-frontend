import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeandecisionService {

  constructor(private http:HttpClient) { }
  getDeanDecision(){
    return this.http.get(`http://localhost:1200/dean-decisions/decisions`)
  }
}
