import {Component, OnInit} from '@angular/core';
import {Showallexport} from "../../../Models/showAllExports/showallexport";
import {ExportServiceService} from "../../../Services/ExportsServices/export-service.service";


@Component({
  selector: 'app-last-export',
  templateUrl: './last-export.component.html',
  styleUrls: ['./last-export.component.css']
})
export class LastExportComponent implements OnInit{
  showAllExport: Showallexport[]
  x:any;
  searchText:string

  onsearchTextEntered(searchValue){
    this.searchText=searchValue
  }
  constructor(private service: ExportServiceService ){

  }
  ngOnInit(): void {
    this.getAllExports()

  }

  getAllExports() {
    return this.service.getAllLastExports().subscribe((getAllLastExport:any)=>{
      this.showAllExport=getAllLastExport;
    })
  }

}
