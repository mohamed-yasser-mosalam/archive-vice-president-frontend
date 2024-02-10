import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Showallexport} from "../Models/showAllExports/showallexport";
import {ExportServiceService} from "../Services/ExportsServices/export-service.service";
import {ActivatedRoute} from "@angular/router";
  @Component({
  selector: 'app-export-files',
  templateUrl:'./export-files.component.html',
  styleUrls: ['./export-files.component.css']
})
export class ExportFilesComponent implements OnInit{
  showAllExport: Showallexport[]
    x:any;
    searchText:string

    onsearchTextEntered(searchValue){
      this.searchText=searchValue
     }
     constructor(private service: ExportServiceService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllExports()

    }

  getAllExports() {
    return this.service.getAllExports().subscribe((getAllExport:any)=>{
      this.showAllExport=getAllExport;
    })
  }



  }
