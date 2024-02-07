import { Component } from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {HttpClient} from "@angular/common/http";
import {ShowTodayExports} from "../Models/showTodayExports/show-today-exports";
import {TodayServiceService} from "../Services/TodayServices/today-service.service";

@Component({
  selector: 'app-today-exports',
  templateUrl: './today-exports.component.html',
  styleUrls: ['./today-exports.component.css']
})
export class TodayExportsComponent {
  showTodayExport: ShowTodayExports[]=[];
  constructor(private todayServiceService: TodayServiceService, private http: HttpClient){

  }
  ngOnInit(): void {
    this.getAllTodayExports();
  }

  getAllTodayExports() {
    return this.todayServiceService.getAllTodayExport().subscribe((getAllExport:any)=>{
      this.showTodayExport=getAllExport;
    })
  }

}
