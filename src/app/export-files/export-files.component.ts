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
   searchResult:Showallexport[]
    page: number=1;
    x:any;
    enterSearchValue: any;
    searchText:string

    onsearchTextEntered(searchValue){
      this.searchText=searchValue
      console.log(this.searchText)
    }
     constructor(private service: ExportServiceService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getAllExports()
    let summary=this.activatedRoute.snapshot.paramMap.get('summary');
       summary && this.service.findExportBySummary(summary).subscribe((result)=>{
       })
    }

  getAllExports() {
    return this.service.getAllExports().subscribe((getAllExport:any)=>{
      this.showAllExport=getAllExport;
    })
  }



  }
