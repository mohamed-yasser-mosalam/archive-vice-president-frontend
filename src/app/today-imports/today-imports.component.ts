import { Component } from '@angular/core';
import {Showallimport} from "../Models/showAllImports/showallimport";
import {ImportServiceService} from "../Services/ImportsServices/import-service.service";
import {ShowTodayImports} from "../Models/showTodayImports/show-today-imports";
import {TodayServiceService} from "../Services/TodayServices/today-service.service";

@Component({
  selector: 'app-today-imports',
  templateUrl: './today-imports.component.html',
  styleUrls: ['./today-imports.component.css']
})
export class TodayImportsComponent {
  showTodayImports: ShowTodayImports[]=[]

  constructor(private todayService:TodayServiceService) {
  }
  ngOnInit(): void {
    this.getAllTodayImports()
  }
  getAllTodayImports() {
    return this.todayService.getAllTodayImport().subscribe((getAllTodayImport:any)=>{
      this.showTodayImports=getAllTodayImport;
    })
  }

}
