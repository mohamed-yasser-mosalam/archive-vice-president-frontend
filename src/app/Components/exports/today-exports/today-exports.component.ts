import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShowTodayExports} from "../../../Models/showTodayExports/show-today-exports";
import {TodayServiceService} from "../../../Services/TodayServices/today-service.service";

@Component({
  selector: 'app-today-exports',
  templateUrl: './today-exports.component.html',
  styleUrls: ['./today-exports.component.css']
})
export class TodayExportsComponent implements OnInit{
  showTodayExport: ShowTodayExports[]=[];
  searchText: string

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
  onsearchTextEntered(searchValue) {
    this.searchText = searchValue
  }
}
